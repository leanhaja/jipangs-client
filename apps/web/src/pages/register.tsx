import { FormProvider, useForm } from 'react-hook-form'

import RegisterPage from '@/views/register'
import { FormData } from '@/views/register/register'

export enum Step {
  'selectMajor',
  'selectRegion',
  'userInfo',
  'univInfo',
}

export default function Register() {
  const methods = useForm<FormData>()

  return (
    <FormProvider {...methods}>
      <RegisterPage />
    </FormProvider>
  )
}
