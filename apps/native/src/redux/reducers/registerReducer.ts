/* eslint-disable no-param-reassign */
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  BirthType,
  EmailType,
  GenderType,
  Major,
  MajorSpecificType,
  MajorType,
  NameType,
  NicknameType,
  Region,
  RegionType,
  Gender,
} from '../types'

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

const numberRegex = /^[0-9]{6}$/

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
        if (!numberRegex.test(state.birth.value) || action.payload.length !== 6)
          state.birth.isValid = false
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
    addGender: (state, action: PayloadAction<Gender>) => {
      state.gender = action.payload
    },
    addMajor: (state, action: PayloadAction<Major>) => {
      if (state.major === action.payload) {
        state.major = null
        return
      }
      state.major = action.payload
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
