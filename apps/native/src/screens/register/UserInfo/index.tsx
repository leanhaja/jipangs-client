import NextButton from '../../../components/button'
import ProgressBar from '../../../components/progress-bar'
import Button from '../../../features/register/components/Button'
import { Input } from '../../../features/register/components/Input'
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
} from '../../../redux/reducers/registerReducer'
import type { Gender } from '../../../redux/types'
import { RegisterStackProps } from '../../../types/navigation'

import * as Styled from './styled'

const GENDER: Gender[] = ['남성', '여성']

export default function UserInfoPage({
  navigation,
}: RegisterStackProps<'UserInfo'>) {
  const dispatch = useAppDispatch()
  const {
    birth,
    email,
    gender: selectedGender,
    name,
    nickname,
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

  const handleNextButton = () => {
    navigation.navigate('UnivInfo')
  }

  const isFormValid =
    name.isValid &&
    nickname.isValid &&
    email.isValid &&
    !!selectedGender &&
    birth.isValid

  return (
    <Styled.Screen>
      <ProgressBar currentStep={3} totalStep={4} />

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
        {GENDER.map((gender, index) => (
          <Button
            key={`${gender}-${index + 1}`}
            isSelected={gender === selectedGender}
            onPress={handleGenderPress}
            textStyle={{ fontSize: 16 }}
            viewStyle={{ height: 44, width: 164 }}
          >
            {gender}
          </Button>
        ))}
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
      <NextButton disabled={!isFormValid} onPress={handleNextButton}>
        다음
      </NextButton>
    </Styled.Screen>
  )
}
