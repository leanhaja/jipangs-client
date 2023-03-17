export interface PostUserInfoResponse {
  error: {
    message: string
    status: number
  }
  response: UserInfo
  success: boolean
}

export interface PostUserAlarmReponse {
  error: {
    message: string
    status: number
  }
  response: {
    careerInfoEmailAlarm: boolean
    carrerInfoPushAlarm: boolean
    name: string
    personalEmailAlarm: boolean
    personalPushAlarm: boolean
    usefulInfoEmailAlarm: boolean
    usefulInfoPushAlarm: boolean
  }
  success: boolean
}

export interface UserInfo {
  birthDay: string
  email: string
  gender: string
  grade: string
  major: string
  marketingPolicy: boolean
  name: string
  nickname: string
  privacyPolicy: boolean
  studentId: string
  university: string
}

export interface Alarm {
  careerInfoEmailAlarm: boolean
  carrerInfoPushAlarm: boolean
  personalEmailAlarm: boolean
  personalPushAlarm: boolean
  usefulInfoEmailAlarm: boolean
  usefulInfoPushAlarm: boolean
}
