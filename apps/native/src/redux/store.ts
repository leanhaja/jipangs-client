/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { configureStore } from '@reduxjs/toolkit'

import Reactotron from '../../ReactotronConfig'

import authReducer from './reducers/authReducer'
import registerReducer from './reducers/registerReducer'

export const store = configureStore({
  enhancers: [Reactotron.createEnhancer!()],
  reducer: { auth: authReducer, register: registerReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
