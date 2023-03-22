import { useQuery } from '@tanstack/react-query'

import CompleteButton from '../../../components/button'
import Button from '../../../features/register/components/Button'
import { Input } from '../../../features/register/components/Input'
import useMutateUserInfo from '../../../features/register/hooks/useMutateUserInfo'
import { queryKeys } from '../../../react-query/constants'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  inputName,
  blurName,
  inputNickname,
  blurNickname,
  inputEmail,
  blurEmail,
  inputBirth,
  blurBirth,
  addGender,
  setValue,
} from '../../../redux/reducers/registerReducer'
import type { Gender, Grade, Major } from '../../../redux/types'
import jipangs from '../../../service/jipangs'

import * as Styled from './styled'

const getUserInfo = async () => {
  const { data } = await jipangs.getUserInfo()
  return data
}

export default function UserInfoPage() {
  const dispatch = useAppDispatch()
  const mutation = useMutateUserInfo()
  useQuery([queryKeys.userInfo], () => getUserInfo(), {
    onSuccess: (data) => {
      dispatch(
        setValue({
          birth: {
            isTouched: false,
            isValid: true,
            value: data.body.user.birthDay,
          },
          email: {
            isTouched: false,
            isValid: true,
            value: data.body.user.email,
          },
          gender: data.body.user.gender as Gender,
          grade: data.body.user.grade as Grade,
          major: data.body.user.major as Major,
          majorSpecific: data.body.user.major,
          name: {
            isTouched: false,
            isValid: true,
            value: data.body.user.name,
          },
          nickname: {
            isTouched: false,
            isValid: true,
            value: data.body.user.nickName,
          },
          region: [],
          university: data.body.user.nickName,
          yearOfAdmission: data.body.user.grade,
        })
      )
    },
  })
  const {
    birth,
    email,
    gender: selectedGender,
    grade,
    major,
    name,
    nickname,
    yearOfAdmission,
  } = useAppSelector((state) => state.register)

  const handleName = (value: string) => {
    dispatch(inputName(value))
  }
  const handleNameBlur = () => dispatch(blurName())

  const handleNickname = (value: string) => {
    dispatch(inputNickname(value))
  }
  const handleNicknameBlur = () => dispatch(blurNickname())

  const handleEmail = (value: string) => {
    dispatch(inputEmail(value))
  }
  const handleEmailBlur = () => dispatch(blurEmail())

  const handleBirth = (value: string) => {
    dispatch(inputBirth(value))
  }
  const handleBirthBlur = () => {
    dispatch(blurBirth())
  }

  const handleGenderPress = (value: Gender) => {
    dispatch(addGender(value))
  }

  const CompleteButtonButton = () => {
    mutation.mutate(
      {
        birthDay: birth.value,
        email: email.value,
        gender: selectedGender!,
        grade: grade!,
        major: major!,
        marketingPolicy: true,
        name: name.value,
        nickName: nickname.value,
        privacyPolicy: true,
        studentId: yearOfAdmission,
        university: '지팡스대학교',
      },
      {
        onSuccess: () => {},
      }
    )
  }

  const isFormValid =
    name.isValid &&
    nickname.isValid &&
    email.isValid &&
    !!selectedGender &&
    birth.isValid

  return (
    <Styled.Screen>
      <Input
        autoComplete="name"
        errorMessage="형식에 맞지 않는 이름이에요!"
        isInvalid={name.isTouched && !name.isValid}
        isValid={name.isValid}
        onBlur={handleNameBlur}
        onChangeText={handleName}
        title="이름"
        value={name.value}
      />
      <Styled.GapNarrow />
      <Input
        errorMessage="형식에 맞지 않는 닉네임이에요!"
        isInvalid={nickname.isTouched && !nickname.isValid}
        isValid={nickname.isValid}
        onBlur={handleNicknameBlur}
        onChangeText={handleNickname}
        title="닉네임"
        value={nickname.value}
      />
      <Styled.GapNarrow />
      <Input
        autoComplete="email"
        errorMessage="형식에 맞지 않는 이메일이에요!"
        isInvalid={email.isTouched && !email.isValid}
        isValid={email.isValid}
        onBlur={handleEmailBlur}
        onChangeText={handleEmail}
        title="이메일"
        value={email.value}
      />
      <Styled.GapNarrow />
      <Styled.ButtonContainer>
        <Button
          isSelected={selectedGender === '남성'}
          onPress={handleGenderPress}
          textStyle={{ fontSize: 16 }}
          viewStyle={{ height: 44, width: 164 }}
        >
          {'남성' as Gender}
        </Button>
        <Styled.GapHoriziontal />
        <Button
          isSelected={selectedGender === '여성'}
          onPress={handleGenderPress}
          textStyle={{ fontSize: 16 }}
          viewStyle={{ height: 44, width: 164 }}
        >
          {'여성' as Gender}
        </Button>
      </Styled.ButtonContainer>
      <Styled.GapNarrow />
      <Input
        errorMessage="형식에 맞지 않는 생년월일이에요!"
        inputMode="numeric"
        isInvalid={birth.isTouched && !birth.isValid}
        isValid={birth.isValid}
        keyboardType="number-pad"
        maxLength={6}
        onBlur={handleBirthBlur}
        onChangeText={handleBirth}
        title="생년월일"
        value={birth.value}
      />
      <Styled.GapWide />
      <CompleteButton disabled={!isFormValid} onPress={CompleteButtonButton}>
        수정 완료
      </CompleteButton>
    </Styled.Screen>
  )
}
