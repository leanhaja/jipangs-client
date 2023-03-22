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
  nickName: string
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

export interface GetUserInfoResponse {
  body: {
    user: {
      alarm: {
        careerInfoEmailAlarm: boolean
        careerInfoPushAlarm: boolean
        personalEmailAlarm: boolean
        personalPushAlarm: boolean
        usefulInfoEmailAlarm: boolean
        usefulInfoPushAlarm: boolean
      }
      birthDay: string
      createdAt: string
      email: string
      emailVerifiedYn: null
      gender: string | null
      grade: string
      major: string
      marketingPolicy: boolean
      modifiedAt: string
      name: string
      nickName: string
      privacyPolicy: boolean
      profileImageUrl: string
      providerType: string
      roleType: string
      studentId: string
      university: string
      userId: string
      username: string
    }
  }
  header: {
    code: number
    message: string
  }
}

export interface GetDeleteUserResponse {
  error: {
    message: string
    status: number
  }
  response: string
  success: boolean
}
