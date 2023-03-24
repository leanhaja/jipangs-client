import { Share } from 'react-native'
import WebView from 'react-native-webview'

import { RootScreenProps } from '../../types'

import * as Styled from './styled'

function ExternalLink({
  navigation,
  route: { params },
}: RootScreenProps<'ExternalLink'>) {
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
            }).catch((e) => {
              const errorMessage =
                e instanceof Error
                  ? e.message
                  : '알 수 없는 에러가 발생했습니다.'

              throw new Error(errorMessage)
            })
          }}
          iconName="share"
        />
      </Styled.Header>
      <WebView source={{ uri: link }} />
    </Styled.Container>
  )
}

export default ExternalLink
