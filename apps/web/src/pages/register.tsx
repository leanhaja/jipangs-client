import { FormProvider, useForm } from 'react-hook-form'

import RegisterPage from '@/views/register'
import { FormData } from '@/views/register/register'

export enum Step {
  'selectMajor',
  'selectRegion',
  'userInfo',
  'univInfo',
}

const defaultValues = {
  abstractMajors: [],
  birth: undefined,
  email: undefined,
  gender: undefined,
  grade: undefined,
  major: undefined,
  name: undefined,
  nickname: undefined,
  region: [],
  studentNumber: undefined,
  university: undefined,
}

export default function Register() {
  const methods = useForm<FormData>({
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <RegisterPage />
    </FormProvider>
  )
}
