import { FormProvider, useForm } from 'react-hook-form'

import RegisterPage from '@/views/register'
import { FormData } from '@/views/register/types'

export enum Step {
  'selectMajor',
  'selectRegion',
  'userInfo',
  'univInfo',
}

const defaultValues = {
  abstractMajors: [],
  birth: '',
  email: '',
  gender: '',
  grade: undefined,
  major: '',
  name: '',
  nickname: '',
  region: [],
  studentNumber: '',
  university: '',
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
