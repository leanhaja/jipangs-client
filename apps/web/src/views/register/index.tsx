import { DevTool } from '@hookform/devtools'
import { Controller, useForm } from 'react-hook-form'

import type { FormData } from './register'
import * as Styled from './styled'

import Button from '@/components/ui/button'
import ButtonInput from '@/components/ui/input/button-input'
import TextInput from '@/components/ui/input/text-input'

const emailRegex =
  /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

export default function RegisterPage() {
  const {
    control,
    formState: { touchedFields },
    handleSubmit,
    register,
    watch,
  } = useForm<FormData>()

  const isNameValid = watch('name')?.length >= 2
  const isNicknameValid =
    watch('nickname')?.length <= 8 && watch('nickname')?.length >= 2
  const isEmailValid = emailRegex.test(watch('email'))
  const isBirthValid =
    watch('birth')?.length === 6 && /^\d{6}$/.test(watch('birth'))

  return (
    <>
      <Styled.Container>
        <TextInput
          placeholder="이름을 입력해주세요."
          title="이름"
          {...register('name')}
          isInValid={touchedFields.name && !isNameValid}
          isValid={isNameValid}
          minLength={2}
        />
        <TextInput
          placeholder="한글 2~8자를 입력해주세요."
          title="닉네임"
          {...register('nickname')}
          isInValid={touchedFields.nickname && !isNicknameValid}
          isValid={isNicknameValid}
          maxLength={8}
          minLength={2}
        />
        <TextInput
          placeholder="id@jipangs.com."
          title="이메일"
          {...register('email')}
          isInValid={touchedFields.email && !isEmailValid}
          isValid={isEmailValid}
          pattern={emailRegex.toString()}
          type="email"
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
          isInValid={touchedFields.birth && !isBirthValid}
          isValid={isBirthValid}
          maxLength={6}
          minLength={6}
        />
        <Button
          disabled={
            !(
              isNameValid &&
              isBirthValid &&
              isEmailValid &&
              isNicknameValid &&
              !!watch('gender')
            )
          }
          type="submit"
        >
          다음
        </Button>
      </Styled.Container>
      <DevTool control={control} />
    </>
  )
}
