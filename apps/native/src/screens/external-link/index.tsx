import { Text } from 'react-native'
import WebView from 'react-native-webview'

import * as Styled from './styled'

import { StackScreenProps } from 'src/types'

function ExternalLink({
  navigation,
  route: { params },
}: StackScreenProps<'ExternalLink'>) {
  const { link, title } = params
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Button
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text>버튼1</Text>
        </Styled.Button>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Button>
          <Text>버튼2</Text>
        </Styled.Button>
      </Styled.Header>
      <WebView source={{ uri: link }} />
    </Styled.Container>
  )
}

export default ExternalLink
