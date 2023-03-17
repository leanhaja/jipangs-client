import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { ScrollView, Share } from 'react-native'

import Filters from '../../components/filters'
import CardGrid, {
  LinkCardProps,
} from '../../features/home/components/card-grid/index'
import Empty from '../../features/home/components/empty'
import useBookMark from '../../hooks/useBookMark'
import useScrap from '../../hooks/useScrap'
import theme from '../../styles/theme'
import { transformPixelToDp } from '../../utils'

import { FILTER_BUTTONS } from './constants'
import * as Styled from './styled'

// const images = Array.from({ length: 8 }, () => ({
//   category: '학술/행사',
//   deadLine: 'D-8',
//   img: 'https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506_1280.jpg',
//   link: 'https://www.naver.com/',
//   major: '',
//   source: '사회복지법인 서울시의사회',
//   title: '서울시 의사회 의료봉사단 약사 자원봉사자 모집 공고',
//   typeName: '',
// }))

export interface GetCardManagement {
  error: {
    message: string
    status: number
  }
  response: {
    content: [
      {
        category: string
        deadLine: string
        id: number
        img: string
        link: string
        major: string
        scrap: true
        scrapCnt: number
        source: string
        title: string
        typeName: string
      }
    ]
    empty: true
    first: true
    last: true
    number: number
    numberOfElements: number
    pageable: {
      offset: number
      pageNumber: number
      pageSize: number
      paged: true
      sort: {
        empty: true
        sorted: true
        unsorted: true
      }
      unpaged: true
    }
    size: number
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
  } | null
  success: true
}

function Save() {
  const [filter, setFilter] = useState(FILTER_BUTTONS[0].key)

  const filterButtons = FILTER_BUTTONS.map(({ key, label }) => ({
    key,
    label,
    onClick: () => {
      setFilter(key)
    },
  }))

  const queryClient = useQueryClient()

  const refetch = async () => {
    try {
      await queryClient.invalidateQueries()

      await queryClient.refetchQueries()
      console.log('success')
    } catch (e) {
      console.error(e)
    }
  }

  const flatListBottomPadding = transformPixelToDp(theme.bottomNavigationHeight)

  const { scarp } = useScrap()

  const scrapCards = scarp?.pages[0]?.content || []

  // const { popularCard } = usePopularActivities('대외활동')

  // console.log(popularCard?.pages[0]?.content)

  const { mutate: requestBookMark } = useBookMark()

  // const [innerWidth, setInnerWidth] = useState(0)

  // const onLayout = (event: LayoutChangeEvent) => {
  //   const { width } = event.nativeEvent.layout

  //   setInnerWidth(width)
  // }

  const onShareClick = (link: string, title: string) => {
    Share.share({
      message: link,
      title,
      url: link,
    }).catch(console.error)
  }

  // const width = (innerWidth - 9) / 2

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>내 스크랩</Styled.Title>
      </Styled.Header>
      <Styled.Main>
        {!!scrapCards.length && (
          <Filters
            buttons={filterButtons}
            selectedFilterKey={filter}
            style={{ marginBottom: 11, marginTop: 25 }}
          />
        )}
        <ScrollView style={{ flex: 1 }}>
          {!scrapCards.length && (
            <Empty
              iconName="bookmark"
              message={`아직 스크랩 한 활동이 없습니다.\n관심있는 활동을 스크랩 해보세요!`}
            />
          )}
          <CardGrid
            contentContainerStyle={{
              paddingBottom: flatListBottomPadding,
            }}
            items={scrapCards.map<LinkCardProps>(
              ({
                category,
                deadLine,
                id,
                img,
                link,
                scrap,
                source,
                title,
              }) => ({
                imageSrc: img,
                isBookMarked: scrap,
                link,
                location: source,
                onScrapClick: () => {
                  requestBookMark(id)
                  refetch().catch(console.error)
                },
                onShareClick: () => {
                  onShareClick(link, title)
                },
                tags: [category, deadLine],
                title,
              })
            )}
          />
        </ScrollView>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Save
