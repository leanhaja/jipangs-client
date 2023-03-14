/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Auth } from '../types'

const initialState = {
  hasInfo: false,
  token: '',
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.token = action.payload.token
      state.hasInfo = action.payload.hasInfo
    },
    logout: (state) => {
      state.token = ''
      state.hasInfo = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
