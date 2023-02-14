import { DevTool } from '@hookform/devtools'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { FormData } from './register'
import * as Styled from './styled'

import Button from '@/components/ui/button'
import ButtonInput from '@/components/ui/input/button-input'
import TextInput from '@/components/ui/input/text-input'

export default function RegisterPage() {
  const [gender, setGender] = useState('')
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<FormData>()

  return (
    <>
      <Styled.Container>
        <TextInput
          placeholder="이름을 입력해주세요."
          title="이름"
          {...register('name')}
        />
        <TextInput
          placeholder="한글 2~8자를 입력해주세요."
          title="닉네임"
          {...register('nickname')}
        />
        <TextInput
          placeholder="id@jipangs.com."
          title="이메일"
          {...register('email')}
        />
        <Controller
          render={() => (
            <ButtonInput
              control={control}
              name="gender"
              option1="남성"
              option2="여성"
            />
          )}
          control={control}
          name="gender"
        />

        <TextInput
          placeholder="ex) 990909"
          title="생년월일"
          {...register('birth')}
        />
        <Button>다음</Button>
      </Styled.Container>
      <DevTool control={control} />
    </>
  )
}
