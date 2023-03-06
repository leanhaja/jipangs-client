import { Share } from 'react-native'
import WebView from 'react-native-webview'

import * as Styled from './styled'

import { StackScreenProps } from 'src/types'

function ExternalLink({
  navigation,
  route: { params },
}: StackScreenProps<'ExternalLink'>) {
  const onBackButtonClick = () => {
    navigation.goBack()
  }

  const { link, title } = params
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Button iconName="before_arrow" onClick={onBackButtonClick} />
        <Styled.Title numberOfLines={1}>{title}</Styled.Title>
        <Styled.Button
          onClick={() => {
            Share.share({
              message: link,
              title,
              url: link,
            }).catch(console.error)
          }}
          iconName="share"
        />
      </Styled.Header>
      <WebView source={{ uri: link }} />
    </Styled.Container>
  )
}

export default ExternalLink
