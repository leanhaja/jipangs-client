import Card from '../../components/card'
import Filters from '../../components/filters'
// import { ROUTE_PATHS } from '../../constants'

import * as Styled from './styled'

// export type Route = (typeof ROUTE_PATHS)[0]

// const LOCAL_JIPANGS = 'http://192.168.0.2:3000/'

const images = Array.from({ length: 1 }, () => ({
  category: '학술/행사',
  deadLine: 'D-8',
  img: 'https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506_1280.jpg',
  link: 'https://www.naver.com/',
  major: '',
  source: '사회복지법인 서울시의사회',
  title: '서울시 의사회 의료봉사단 약사 자원봉사자 모집 공고',
  typeName: '',
}))

function Home() {
  // const [selectedRouteName, setSelectedRouteName] = useState<Route>('/')

  // const onMessage = ({ nativeEvent: { data } }: WebViewMessageEvent) => {
  //   // const parsedData: unknown = JSON.parse(data)
  //   // if (!isExternalLinkBridgeResponse(parsedData)) return
  //   // navigation.navigate('ExternalLink', parsedData)
  // }

  return (
    <Styled.Container>
      <Filters
        buttons={[
          { key: 'external-activity', label: '대외활동' },
          { key: 'volunteer-activity', label: '봉사활동' },
        ]}
        selectedFilterKey="external-activity"
      />
      {images.map(({ category, deadLine, img, source, title }, index) => (
        <Card
          key={`card-${index + 1}`}
          imageSrc={img}
          location={source}
          tags={[category, deadLine]}
          title={title}
        />
      ))}
    </Styled.Container>
  )
}

export default Home
