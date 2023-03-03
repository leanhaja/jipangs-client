export type MajorData = {
  abstractMajors: string
}

export type RegionData = {
  region: string[]
}

export type UserData = {
  birth: string
  email: string
  gender: string
  major: string
  name: string
  nickname: string
}

export type UnivData = {
  grade: number
  major: string
  studentNumber: string
  university: string
}

export type FormData = RegionData & UserData & UnivData & MajorData
