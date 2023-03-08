/* eslint-disable no-param-reassign */
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

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
export type Region =
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

export type RegionType = {
  region: Region[] | undefined
}
type BirthType = {
  birth: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}
export type GenderType = {
  gender: '남성' | '여성' | undefined
}
type NameType = {
  name: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}
type NicknameType = {
  nickname: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}
type MajorSpecificType = {
  majorSpecific: string
}
type EmailType = {
  email: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}
type RegisterType = MajorType &
  BirthType &
  NameType &
  NicknameType &
  RegionType &
  MajorSpecificType &
  GenderType &
  EmailType

const emailRegex =
  /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

const initialState: RegisterType = {
  birth: { isTouched: false, isValid: false, value: '' },
  email: { isTouched: false, isValid: false, value: '' },
  gender: undefined,
  major: undefined,
  majorSpecific: '',
  name: { isTouched: false, isValid: false, value: '' },
  nickname: { isTouched: false, isValid: false, value: '' },
  region: undefined,
}

export const inputName = createAction<NameType['name']['value']>(
  'register/name/input'
)
export const blurName = createAction('register/name/blur')
export const inputNickname = createAction<NicknameType['nickname']['value']>(
  'register/nickname/input'
)
export const blurNickname = createAction('register/nickname/blur')
export const inputEmail = createAction<EmailType['email']['value']>(
  'register/email/input'
)
export const blurEmail = createAction('register/email/blur')

export const inputBirth = createAction<BirthType['birth']['value']>(
  'register/birth/input'
)
export const blurBirth = createAction('register/birth/blur')

export const registerSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(inputName, (state, action) => {
        if (action.payload.length <= 1) state.name.isValid = false
        else state.name.isValid = true
        state.name.value = action.payload
      })
      .addCase(blurName, (state) => {
        state.name.isTouched = true
      })
    builder
      .addCase(inputNickname, (state, action) => {
        if (action.payload.length <= 2) state.nickname.isValid = false
        else state.nickname.isValid = true
        state.nickname.value = action.payload
      })
      .addCase(blurNickname, (state) => {
        state.nickname.isTouched = true
      })
    builder
      .addCase(inputEmail, (state, action) => {
        if (!emailRegex.test(action.payload)) state.email.isValid = false
        else state.email.isValid = true
        state.email.value = action.payload
      })
      .addCase(blurEmail, (state) => {
        state.email.isTouched = true
      })
    builder
      .addCase(inputBirth, (state, action) => {
        if (action.payload.length !== 6) state.birth.isValid = false
        else state.birth.isValid = true
        state.birth.value = action.payload
      })
      .addCase(blurBirth, (state) => {
        state.birth.isTouched = true
      })
  },
  initialState,
  name: 'register',
  reducers: {
    addGender: (state, action: PayloadAction<GenderType>) => {
      state.gender = action.payload.gender
    },
    addMajor: (state, action: PayloadAction<MajorType>) => {
      if (state.major === action.payload.major) {
        state.major = null
        return
      }
      state.major = action.payload.major
    },
    addRegion: (state, action: PayloadAction<Region>) => {
      if (!state.region) {
        state.region = [action.payload]
        return
      }
      if (state.region.includes(action.payload)) {
        state.region = state.region.filter(
          (region) => region !== action.payload
        )
        return
      }
      state.region.push(action.payload)
    },
  },
})

export const { addGender, addMajor, addRegion } = registerSlice.actions
export default registerSlice.reducer
