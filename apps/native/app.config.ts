import 'dotenv/config'

export interface AppConfig {
  BASE_URL: string
  OAUTH_KAKAO_URI: string
}

export default {
  extra: {
    BASE_URL: process.env.BASE_URL,
    OAUTH_KAKAO_URI: process.env.OAUTH_KAKAO_URI,
  },
  name: 'Jipangs',
  version: '1.0.0',
}
