import { useState } from 'react'

import { FILTER_BUTTONS } from './constants'
import * as Styled from './styled'

import Card from '@/components/card'
import Filters from '@/components/filters'

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (data: string) => void
    }
  }
}

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

function Save() {
  const [filter, setFilter] = useState(FILTER_BUTTONS[0].key)

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>내 스크랩</h1>
      </Styled.Header>
      <Styled.Main>
        <Filters
          buttons={FILTER_BUTTONS.map(({ key, label }) => ({
            key,
            label,
            onClick: () => {
              setFilter(key)
            },
          }))}
          selectedFilterKey={filter}
          style={{ marginBottom: 11, marginTop: 25 }}
        />
        <Styled.CardList>
          {images.map(
            ({ category, deadLine, img, link, source, title }, index) => (
              <div
                key={`${title}-${index + 1}`}
                onClick={() => {
                  window.ReactNativeWebView.postMessage(
                    JSON.stringify({ link, title })
                  )
                }}
                onKeyUp={() => {
                  console.log('hi')
                }}
                role="button"
                tabIndex={0}
              >
                <Card
                  imageSrc={img}
                  location={source}
                  size="small"
                  tags={[category, deadLine]}
                  title={title}
                />
              </div>
            )
          )}
        </Styled.CardList>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Save
