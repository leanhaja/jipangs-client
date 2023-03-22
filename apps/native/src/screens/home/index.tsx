import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, LayoutChangeEvent, ScrollView, Share } from 'react-native'

import Banner, { BannerProps } from '../../components/banner'
import Card from '../../components/card'
import SearchBar from '../../components/search-bar'
import Title, { TitleProps } from '../../components/title'
import { CAROUSEL_BANNER_RESOURCES } from '../../constants'
import BannerCarousel, {
  BannerCarouselProps,
  LinkBannerProps,
} from '../../features/home/components/banner-carousel'
import CardCarousel, {
  CardCarouselProps,
  LinkCardProps,
} from '../../features/home/components/card-carousel'
import CardGrid, {
  CardGridProps,
} from '../../features/home/components/card-grid'
import Empty from '../../features/home/components/empty'
import CompleteModal from '../../features/register/components/CompleteModal'
import useActivities from '../../hooks/useActivities'
import useBookMark from '../../hooks/useBookMark'
import useSearchingCards from '../../hooks/useSearchedCards'
import { useAppSelector } from '../../redux/hooks'
import theme from '../../styles/theme'
import {
  Card as CardInfo,
  MainTabParamList,
  RootStackParamList,
} from '../../types'
import { transformPixelToDp } from '../../utils'

import * as Styled from './styled'

const GAP = 16
const CARD_WIDTH = 265

type BannerCarouselItem = {
  props: BannerCarouselProps
  type: 'banner-carousel'
}

type CardCarouselItem = { props: CardCarouselProps; type: 'card-carousel' }

type BannerItem = { props: BannerProps; type: 'banner' }

type TitleItem = { props: TitleProps; type: 'title' }

type CardGridItem = { props: CardGridProps; type: 'card-grid' }

type PageItem =
  | BannerCarouselItem
  | CardCarouselItem
  | BannerItem
  | TitleItem
  | CardGridItem

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>

function Home({ navigation, route }: HomeScreenProps) {
  const [isSearchDone, setIsSearchDone] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [tabIndex, setTabIndex] = useState(0)
  const { cardsResponse: popularExternalCardPageInfo } = useActivities(
    '대외활동',
    'popular'
  )
  const { cardsResponse: popularVolunteerCardPageInfo } = useActivities(
    '봉사활동',
    'popular'
  )
  const {
    cardsResponse: latestCardPageInfo,
    fetchNextCards: fetchNextLatestCards,
    hasNextCards: hasNextLatestCard,
  } = useActivities(tabIndex === 1 ? '대외활동' : '봉사활동', 'new')
  const [resultCards, setResultCards] = useState<CardInfo[]>([])

  const { result } = useSearchingCards(keyword)

  const [innerWidth, setInnerWidth] = useState(0)

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout

    setInnerWidth(width)
  }

  const { mutate: requestBookMark } = useBookMark()

  const popularExternalCards =
    popularExternalCardPageInfo?.pages[0]?.content || []
  const popularVolunteerCards =
    popularVolunteerCardPageInfo?.pages[0]?.content || []
  const latestCards =
    latestCardPageInfo?.pages.flatMap((page) => page?.content || []) || []

  const searchingCards = useMemo(
    () => result?.pages[0]?.content || [],
    [result?.pages]
  )

  useEffect(() => {
    setResultCards(searchingCards)
  }, [searchingCards])

  const onCardClick = (link: string, title: string) => {
    navigation.navigate('ExternalLink', { link, title })
  }

  const onShareClick = (link: string, title: string) => {
    Share.share({
      message: link,
      title,
      url: link,
    }).catch((e: unknown) => {
      const errorMessage =
        e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'

      throw new Error(errorMessage)
    })
  }

  const getBannerCarouselInfo = (
    items: LinkBannerProps[],
    containerStyle?: BannerCarouselProps['containerStyle']
  ): BannerCarouselItem => ({
    props: {
      bannerWidth: innerWidth,
      containerStyle,
      isProgressBarVisible: true,
      items,
      onBannerClick: onCardClick,
    },
    type: 'banner-carousel',
  })

  const getTitleInfo = (
    title: string,
    style?: TitleProps['style']
  ): TitleItem => ({
    props: { style, title },
    type: 'title',
  })

  const getCardCarouselInfo = (
    items: LinkCardProps[],
    containerStyle?: CardCarouselProps['containerStyle']
  ): CardCarouselItem => ({
    props: {
      cardOffset: GAP,
      cardWidth: CARD_WIDTH,
      containerStyle,
      items,
      onCardClick,
    },
    type: 'card-carousel',
  })

  const getCardGridInfo = (
    items: LinkCardProps[],
    contentContainerStyle?: CardGridProps['contentContainerStyle']
  ): CardGridItem => ({
    props: {
      contentContainerStyle,
      items,
      onCardClick,
    },
    type: 'card-grid',
  })

  const getPageItems = (): PageItem[] => {
    if (tabIndex === 0) {
      return [
        getBannerCarouselInfo(CAROUSEL_BANNER_RESOURCES, { marginTop: 32 }),
        getTitleInfo('인기 대외활동', { marginTop: 40 }),
        getCardCarouselInfo(
          popularExternalCards.map<LinkCardProps>(
            ({ category, deadLine, id, img, link, scrap, source, title }) => ({
              imageSrc: img,
              isBookMarked: scrap,
              link,
              location: source,
              onScrapClick: () => {
                requestBookMark(id)
              },
              onShareClick: () => {
                onShareClick(link, title)
              },
              tags: [category, deadLine],
              title,
            })
          ),
          { marginTop: 8 }
        ),
        {
          props: {
            containerStyle: {
              marginTop: 44,
            },
            size: 'small',
            tag: '보건의료',
            title: '대외활동 제보하기',
          },
          type: 'banner',
        },
        {
          props: { style: { marginTop: 44 }, title: '인기 봉사활동' },
          type: 'title',
        },
        getCardCarouselInfo(
          popularVolunteerCards.map<LinkCardProps>(
            ({ category, deadLine, id, img, link, scrap, source, title }) => ({
              imageSrc: img,
              isBookMarked: scrap,
              link,
              location: source,
              onScrapClick: () => {
                requestBookMark(id)
              },
              onShareClick: () => {
                onShareClick(link, title)
              },
              tags: [category, deadLine],
              title,
            })
          ),
          { marginTop: 8 }
        ),
      ]
    }

    if (tabIndex === 1) {
      return [
        getTitleInfo('인기 대외활동', { marginTop: 48 }),
        getCardCarouselInfo(
          popularExternalCards.map<LinkCardProps>(
            ({ category, deadLine, id, img, link, scrap, source, title }) => ({
              imageSrc: img,
              isBookMarked: scrap,
              link,
              location: source,
              onScrapClick: () => {
                requestBookMark(id)
              },
              onShareClick: () => {
                onShareClick(link, title)
              },
              tags: [category, deadLine],
              title,
            })
          ),
          { marginTop: 8 }
        ),
        getTitleInfo('새로운 대외활동', { marginTop: 56 }),
        getCardGridInfo(
          latestCards.map<LinkCardProps>(
            ({ category, deadLine, id, img, link, scrap, source, title }) => ({
              imageSrc: img,
              isBookMarked: scrap,
              link,
              location: source,
              onScrapClick: () => {
                requestBookMark(id)
              },
              onShareClick: () => {
                onShareClick(link, title)
              },
              tags: [category, deadLine],
              title,
            })
          ),
          { marginTop: 8 }
        ),
      ]
    }

    return [
      getTitleInfo('인기 봉사활동', { marginTop: 48 }),
      getCardCarouselInfo(
        popularExternalCards.map<LinkCardProps>(
          ({ category, deadLine, id, img, link, scrap, source, title }) => ({
            imageSrc: img,
            isBookMarked: scrap,
            link,
            location: source,
            onScrapClick: () => {
              requestBookMark(id)
            },
            onShareClick: () => {
              onShareClick(link, title)
            },
            tags: [category, deadLine],
            title,
          })
        ),
        { marginTop: 8 }
      ),
      getTitleInfo('새로운 봉사활동', { marginTop: 56 }),
      getCardGridInfo(
        latestCards.map<LinkCardProps>(
          ({ category, deadLine, id, img, link, scrap, source, title }) => ({
            imageSrc: img,
            isBookMarked: scrap,
            link,
            location: source,
            onScrapClick: () => {
              requestBookMark(id)
            },
            onShareClick: () => {
              onShareClick(link, title)
            },
            tags: [category, deadLine],
            title,
          })
        ),
        { marginTop: 8 }
      ),
    ]
  }

  const createMain = (pageItems: PageItem[]) =>
    pageItems.map(({ props, type }, index) => {
      switch (type) {
        case 'banner':
          return <Banner key={`page-item-${index + 1}`} {...props} />

        case 'banner-carousel':
          return <BannerCarousel key={`page-item-${index + 1}`} {...props} />

        case 'card-carousel':
          return <CardCarousel key={`page-item-${index + 1}`} {...props} />

        case 'title':
          return <Title key={`page-item-${index + 1}`} {...props} />

        case 'card-grid':
          return <CardGrid key={`page-item-${index + 1}`} {...props} />

        default:
          throw new Error('error')
      }
    })

  const mainBottomPadding =
    transformPixelToDp(theme.bottomNavigationHeight) + 54

  const gridWidth = (innerWidth - 9) / 2

  const { hasInfo } = useAppSelector((state) => state.auth)

  // const isCloseToBottom = ({
  //   contentOffset,
  //   contentSize,
  //   layoutMeasurement,
  // }) => {
  //   const paddingToBottom = 34
  //   return (
  //     layoutMeasurement.height + contentOffset.y >=
  //     contentSize.height - paddingToBottom
  //   )
  // }

  if (!hasInfo) {
    navigation.setParams({ isNewUser: true })
    navigation.replace('Register')
  }

  return (
    <>
      {route.params.isNewUser && (
        <CompleteModal
          onClose={() => {
            navigation.setParams({ isNewUser: false })
          }}
        />
      )}
      <Styled.Container>
        <Styled.Header isSearching={isSearching}>
          <SearchBar
            onCancelButtonClick={() => {
              setResultCards([])
              setKeyword('')
              setIsSearchDone(false)
            }}
            onSearchButtonClick={() => {
              setResultCards([])
              setKeyword('')
              setIsSearchDone(false)
            }}
            onSubmitEditing={(e) => {
              setKeyword(e.nativeEvent.text)
              setIsSearchDone(true)
            }}
            tabs={{
              buttons: [
                { label: '홈' },
                { label: '대외활동' },
                { label: '봉사활동' },
              ],
              onTabChange: setTabIndex,
              selectedTabIndex: tabIndex,
            }}
            onModeChange={setIsSearching}
          />
        </Styled.Header>
        <Styled.Main style={{ paddingBottom: mainBottomPadding }}>
          {isSearching ? (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {resultCards.length ? (
                <FlatList
                  renderItem={({
                    index,
                    item: {
                      category,
                      deadLine,
                      id,
                      img,
                      scrap: isBookMarked,
                      source,
                      title,
                    },
                  }) => (
                    <Card
                      onScrapClick={() => {
                        requestBookMark(id)
                      }}
                      style={{
                        marginBottom: 25,
                        marginRight: index % 2 ? 0 : 9,
                        width: gridWidth,
                      }}
                      imageSrc={img}
                      isBookMarked={isBookMarked}
                      location={source}
                      size="small"
                      tags={[category, deadLine]}
                      title={title}
                    />
                  )}
                  contentContainerStyle={{ marginTop: 16 }}
                  data={resultCards}
                  numColumns={2}
                  style={{ flex: 1 }}
                />
              ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {isSearchDone && (
                    <Empty
                      iconName="search"
                      message={`검색 결과가 없습니다.\n다른 검색어를 입력해보세요!`}
                    />
                  )}
                </>
              )}
            </>
          ) : (
            <ScrollView
              onScrollEndDrag={({
                nativeEvent: { contentOffset, contentSize, layoutMeasurement },
              }) => {
                const isCloseToBottom =
                  layoutMeasurement.height + contentOffset.y >=
                  contentSize.height - mainBottomPadding

                if (isCloseToBottom && tabIndex !== 0) {
                  if (hasNextLatestCard) {
                    fetchNextLatestCards().catch((e) => {
                      const errorMessage =
                        e instanceof Error
                          ? e.message
                          : '알 수 없는 에러가 발생했습니다.'

                      throw new Error(errorMessage)
                    })
                  }
                }
              }}
              onLayout={onLayout}
              style={{ flex: 1 }}
            >
              {createMain(getPageItems())}
            </ScrollView>
          )}
        </Styled.Main>
      </Styled.Container>
    </>
  )
}

export default Home
