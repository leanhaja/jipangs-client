import 'dotenv/config'

export interface AppConfig {
  OAUTH_KAKAO_URI: string
}

export default {
  extra: {
    OAUTH_KAKAO_URI: process.env.OAUTH_KAKAO_URI,
  },
  name: 'Jipangs',
  version: '1.0.0',
}
