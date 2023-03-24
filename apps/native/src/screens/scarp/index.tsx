import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { ScrollView, Share } from 'react-native'

import Filters from '../../components/filters'
import CardGrid, {
  LinkCardProps,
} from '../../features/home/components/card-grid/index'
import Empty from '../../features/home/components/empty'
import useBookMark from '../../hooks/useBookMark'
import useScrap from '../../hooks/useScrapCard'
import theme from '../../styles/theme'
import { transformPixelToDp } from '../../utils'

import { FILTER_BUTTONS } from './constants'
import * as Styled from './styled'

import { MainTabParamList, RootStackParamList } from 'src/types'

export type FilterKey = (typeof FILTER_BUTTONS)[number]['key']

type ScrapScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Scrap'>,
  NativeStackScreenProps<RootStackParamList>
>

function Save({ navigation }: ScrapScreenProps) {
  const [filter, setFilter] = useState<FilterKey>(FILTER_BUTTONS[0].key)

  const filterButtons = FILTER_BUTTONS.map(({ key, label }) => ({
    key,
    label,
    onClick: () => {
      setFilter(key)
    },
  }))

  const flatListBottomPadding = transformPixelToDp(theme.bottomNavigationHeight)

  const {
    refetch: refetchExternal,

    scarp: scrapExternal,
  } = useScrap('대외활동')

  const { refetch: refetchVolunteer, scarp: scrapVolunteer } =
    useScrap('봉사활동')

  useFocusEffect(
    useCallback(() => {
      if (filter === 'external-activity') {
        refetchExternal().catch((e) => {
          const errorMessage =
            e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'
          throw new Error(errorMessage)
        })
      } else {
        refetchVolunteer().catch((e) => {
          const errorMessage =
            e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'
          throw new Error(errorMessage)
        })
      }
    }, [filter, refetchExternal, refetchVolunteer])
  )

  const scrapCards =
    filter === 'external-activity'
      ? scrapExternal?.pages[0]?.content || []
      : scrapVolunteer?.pages[0]?.content || []

  const { mutate: requestBookMark } = useBookMark()

  const onShareClick = (link: string, title: string) => {
    Share.share({
      message: link,
      title,
      url: link,
    }).catch((e) => {
      const errorMessage =
        e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'

      throw new Error(errorMessage)
    })
  }

  useEffect(() => {
    if (filter === 'external-activity') {
      refetchVolunteer().catch((e) => {
        const errorMessage =
          e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'

        throw new Error(errorMessage)
      })
    } else {
      refetchExternal().catch((e) => {
        const errorMessage =
          e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'

        throw new Error(errorMessage)
      })
    }
  }, [filter, refetchExternal, refetchVolunteer])

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>내 스크랩</Styled.Title>
      </Styled.Header>
      <Styled.Main>
        <Filters
          buttons={filterButtons}
          selectedFilterKey={filter}
          style={{ marginBottom: 11, marginTop: 25 }}
        />
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
                  if (filter === 'external-activity') {
                    refetchVolunteer().catch((e) => {
                      const errorMessage =
                        e instanceof Error
                          ? e.message
                          : '알 수 없는 에러가 발생했습니다.'

                      throw new Error(errorMessage)
                    })
                  } else {
                    refetchExternal().catch((e) => {
                      const errorMessage =
                        e instanceof Error
                          ? e.message
                          : '알 수 없는 에러가 발생했습니다.'

                      throw new Error(errorMessage)
                    })
                  }
                },
                onShareClick: () => {
                  onShareClick(link, title)
                },

                tags: [category, deadLine],
                title,
              })
            )}
            onCardClick={(link, title) => {
              navigation.navigate('ExternalLink', { link, title })
            }}
          />
        </ScrollView>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Save
