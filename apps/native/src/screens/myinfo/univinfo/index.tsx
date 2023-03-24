import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import Button from '../../../components/button'
import Modal from '../../../features/register/components/InputModal'
import InputShapeButton from '../../../features/register/components/InputShapeButton'
import useMutateUserInfo from '../../../features/register/hooks/useMutateUserInfo'
import { queryKeys } from '../../../react-query/constants'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  selectGrade,
  selectYearOfAdmission,
  setValue,
} from '../../../redux/reducers/registerReducer'
import { Gender, Grade, Major } from '../../../redux/types'
import jipangs from '../../../service/jipangs'
import {
  RootStackParamList,
  SettingStackParamList,
} from '../../../types/navigation'

import * as Styled from './styled'

const YEAR_OF_ADMISSION = ['23학번', '22학번', '21학번', '20학번']

const GRADE: Grade[] = ['1학년', '2학년', '3학년', '4학년', '5학년']

type UnivInfoScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SettingStackParamList, 'MyInfo'>,
  NativeStackNavigationProp<RootStackParamList>
>

const getUserInfo = async () => {
  const { data } = await jipangs.getUserInfo()
  return data
}

export default function UnivInfoScreen() {
  const navigation = useNavigation<UnivInfoScreenNavigationProp>()
  const dispatch = useAppDispatch()
  const mutation = useMutateUserInfo()
  const {
    birth,
    email,
    gender: selectedGender,
    grade,
    major,
    majorSpecific,
    name,
    nickname,
    university,
    yearOfAdmission,
  } = useAppSelector((state) => state.register)
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false)
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
          university: data.body.user.university,
          yearOfAdmission: data.body.user.studentId,
        })
      )
    },
  })

  const handleSelectAdmission = (value: string) => {
    dispatch(selectYearOfAdmission(value))
  }
  const handleSelectGrade = (value: Grade) => {
    dispatch(selectGrade(value))
  }
  const handleYearOfAdmissonButtonPress = () => setIsAdmissionModalOpen(true)
  const handleGradeButtonPress = () => setIsGradeModalOpen(true)

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
        university,
      },
      {
        onSuccess: () => {},
      }
    )
  }

  return (
    <Styled.Screen>
      {isAdmissionModalOpen && (
        <Modal
          onCloseModal={setIsAdmissionModalOpen}
          onSelect={handleSelectAdmission}
          options={YEAR_OF_ADMISSION}
          title="학번 선택"
        />
      )}
      {isGradeModalOpen && (
        <Modal
          onCloseModal={setIsGradeModalOpen}
          onSelect={handleSelectGrade}
          options={GRADE}
          title="학년 선택"
        />
      )}
      <InputShapeButton
        onPress={() =>
          navigation.navigate('Register', { screen: 'SearchUniv' })
        }
        title="대학교"
      >
        {university}
      </InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton
        onPress={() =>
          navigation.navigate('Register', { screen: 'SearchMajor' })
        }
        title="학과"
      >
        {majorSpecific}
      </InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton onPress={handleYearOfAdmissonButtonPress} title="학번">
        {yearOfAdmission || '학번를 선택해 주세요.'}
      </InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton onPress={handleGradeButtonPress} title="학년">
        {grade || '학년를 선택해 주세요.'}
      </InputShapeButton>
      <Styled.GapWide />
      <Button onPress={CompleteButtonButton}>수정 완료</Button>
    </Styled.Screen>
  )
}
