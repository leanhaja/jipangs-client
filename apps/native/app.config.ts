import 'dotenv/config'

export interface AppConfig {
  BASEURL: string
  OAUTH_KAKAO_URI: string
}

export default {
  extra: {
    BASEURL: process.env.BASEURL,
    OAUTH_KAKAO_URI: process.env.OAUTH_KAKAO_URI,
  },
  name: 'Jipangs',
  version: '1.0.0',
}
