import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import Card from '../../components/card'
import Filters from '../../components/filters'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux/reducers/authReducer'
import theme from '../../styles/theme'
import { transformPixelToDp } from '../../utils'

import { FILTER_BUTTONS } from './constants'
import * as Styled from './styled'

const images = Array.from({ length: 8 }, () => ({
  category: '학술/행사',
  deadLine: 'D-8',
  img: 'https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506_1280.jpg',
  link: 'https://www.naver.com/',
  major: '',
  source: '사회복지법인 서울시의사회',
  title: '서울시 의사회 의료봉사단 약사 자원봉사자 모집 공고',
  typeName: '',
}))

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
  const dispatch = useAppDispatch()
  const [filter, setFilter] = useState(FILTER_BUTTONS[0].key)

  const filterButtons = FILTER_BUTTONS.map(({ key, label }) => ({
    key,
    label,
    onClick: () => {
      setFilter(key)
    },
  }))

  const flatListBottomPadding = transformPixelToDp(theme.bottomNavigationHeight)

  const { token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const testRequest = async () => {
      const instance = axios.create({
        baseURL: 'https://dev-single-server.jipangs.com',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 3000,
      })

      // console.log('start', token)

      console.log(
        encodeURIComponent('/api/v1/card-management/card/봉사활동/popular')
      )

      try {
        const response = await instance.get(
          '/api/v1/card-management/card/봉사활동/popular'
        )
        console.log(response.data)
      } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 401) {
          console.log('redirection')
          dispatch(logout())
        }
      }
    }
    testRequest().then(console.log).catch(console.error)
  }, [dispatch, token])

  // useEffect(() => {
  //   console.log('hi')
  //   axios
  //     .get(
  //       'https://dev-single-server.jipangs.com/api/v1/card-management/card/scrap?page=0&size=1&sort=string'
  //     )
  //     .then(console.log)
  //     .catch(console.error)
  // }, [])

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
        <View style={{ flex: 1 }}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: flatListBottomPadding,
            }}
            renderItem={({
              index,
              item: { category, deadLine, img, source, title },
            }) => (
              <Card
                style={{
                  flex: 1,
                  marginBottom: 25,
                  marginRight: index % 2 ? 0 : 9,
                }}
                imageSrc={img}
                location={source}
                size="small"
                tags={[category, deadLine]}
                title={title}
              />
            )}
            data={images}
            numColumns={2}
            style={{ flex: 1 }}
          />
        </View>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Save
