export interface PostUserAlarm {
  error: {
    message: string
    status: number
  }
  respones: {
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
  success: boolean
}

export interface PostUserInfo {
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
