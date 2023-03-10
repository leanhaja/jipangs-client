import { DevTool } from '@hookform/devtools'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Step } from '../types'

import * as Styled from './styled'
import type { FormData } from './userInfo'

import Button from '@/components/user-interface/button'
import ButtonInput from '@/features/register/components/input/button-input'
import TextInput from '@/features/register/components/input/text-input'

// TODO: 상수폴더로 빼기
const MINIMUM_NAME_LEN = 2
const MAXIMUM_NICKNAME_LEN = 8
const MINIMUM_NICKNAME_LEN = 2
const BIRTH_FORMAT_LEN = 6
const emailRegex =
  /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

interface UserInfoPageProps {
  setStep: Dispatch<SetStateAction<Step>>
}

export default function UserInfoPage({ setStep }: UserInfoPageProps) {
  const {
    control,
    formState: { touchedFields },
    register,
    watch,
  } = useForm<FormData>()

  const isNameValid = watch('name')?.length >= MINIMUM_NAME_LEN
  const isNicknameValid =
    watch('nickname')?.length <= MAXIMUM_NICKNAME_LEN &&
    watch('nickname')?.length >= MINIMUM_NICKNAME_LEN
  const isEmailValid = emailRegex.test(watch('email'))
  const isBirthValid = /^\d{6}$/.test(watch('birth'))

  const handleNextButton = () => setStep(4)

  return (
    <>
      <Styled.Container>
        <TextInput
          placeholder="이름을 입력해주세요."
          title="이름"
          {...register('name')}
          isInValid={touchedFields.name && !isNameValid}
          isValid={isNameValid}
          minLength={MINIMUM_NAME_LEN}
        />
        <TextInput
          placeholder="한글 2~8자를 입력해주세요."
          title="닉네임"
          {...register('nickname')}
          isInValid={touchedFields.nickname && !isNicknameValid}
          isValid={isNicknameValid}
          maxLength={MAXIMUM_NICKNAME_LEN}
          minLength={MINIMUM_NICKNAME_LEN}
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
              title="성별"
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
          maxLength={BIRTH_FORMAT_LEN}
          minLength={BIRTH_FORMAT_LEN}
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
          onClick={handleNextButton}
        >
          다음
        </Button>
      </Styled.Container>
      <DevTool control={control} />
    </>
  )
}
