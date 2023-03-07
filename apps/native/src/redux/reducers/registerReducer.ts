/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MajorType = {
  major:
    | '간호학'
    | '의학'
    | '치의학'
    | '약학'
    | '물리치료'
    | '작업치료'
    | '임상병리'
    | '재활관련'
    | '방사선'
    | '응급구조'
    | '치위생'
    | '보건의료행정'
    | '의공.의과학'
    | '환경,보건 관련'
    | '의료정보학'
    | '치기공'
    | '한의학'
    | undefined
    | null
}
type RegionType = {
  region:
    | '서울'
    | '경기'
    | '인천'
    | '대전'
    | '충북'
    | '충남'
    | '대구'
    | '경북'
    | '부산'
    | '울산'
    | '경남'
    | '광주'
    | '전북'
    | '전남'
    | '강원'
    | '제주'
    | undefined
}
type BirthType = {
  birth: number | undefined
}
type GenderType = {
  gender: '남성' | '여성' | undefined
}
type NameType = {
  name: string
}
type NicknameType = {
  nickname: string
}
type MajorSpecificType = {
  majorSpecific: string
}
type EmailType = {
  email: string
}
type RegisterType = MajorType &
  BirthType &
  NameType &
  NicknameType &
  RegionType &
  MajorSpecificType &
  GenderType &
  EmailType

const initialState: RegisterType = {
  birth: undefined,
  email: '',
  gender: undefined,
  major: undefined,
  majorSpecific: '',
  name: '',
  nickname: '',
  region: undefined,
}

export const registerSlice = createSlice({
  initialState,
  name: 'register',
  reducers: {
    addMajor: (state, action: PayloadAction<MajorType>) => {
      if (state.major === action.payload.major) {
        state.major = null
        return
      }
      state.major = action.payload.major
    },
  },
})

export const { addMajor } = registerSlice.actions
export default registerSlice.reducer
