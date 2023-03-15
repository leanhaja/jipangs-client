declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
declare module '*.png' {
  const value: string
  export = value
}

declare module '*.ttf'

declare module 'react-native-dotenv' {
  export const OAUTH_KAKAO_URI: string
}
