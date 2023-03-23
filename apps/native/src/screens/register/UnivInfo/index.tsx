import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'

import Button from '../../../components/button'
import ProgressBar from '../../../components/progress-bar'
import Modal from '../../../features/register/components/InputModal'
import InputShapeButton from '../../../features/register/components/InputShapeButton'
import useMutateUserInfo from '../../../features/register/hooks/useMutateUserInfo'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setUserInfo } from '../../../redux/reducers/authReducer'
import {
  reset,
  selectGrade,
  selectYearOfAdmission,
} from '../../../redux/reducers/registerReducer'
import { Grade } from '../../../redux/types'

import * as Styled from './styled'

import { RegisterStackProps, RootStackParamList } from 'src/types'

const YEAR_OF_ADMISSION = ['23학번', '22학번', '21학번', '20학번']

const GRADE: Grade[] = ['1학년', '2학년', '3학년', '4학년', '5학년']

type UniversityScreenProps = CompositeScreenProps<
  RegisterStackProps<'UnivInfo'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function UnivInfoScreen({ navigation }: UniversityScreenProps) {
  const mutation = useMutateUserInfo()
  const {
    birth,
    email,
    gender,
    grade,
    majorSpecific,
    marketingPolicy,
    name,
    nickname,
    privacyPolicy,
    university,
    yearOfAdmission,
  } = useAppSelector((state) => state.register)
  const dispatch = useAppDispatch()
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false)

  const handleSelectAdmission = (value: string) => {
    dispatch(selectYearOfAdmission(value))
  }
  const handleSelectGrade = (value: Grade) => {
    dispatch(selectGrade(value))
  }
  const handleYearOfAdmissonButtonPress = () => setIsAdmissionModalOpen(true)
  const handleGradeButtonPress = () => setIsGradeModalOpen(true)

  return (
    <Styled.Screen>
      <ProgressBar currentStep={4} totalStep={4} />
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
        onPress={() => navigation.navigate('SearchUniv')}
        title="대학교"
      >
        {university || '대학교를 선택해 주세요.'}
      </InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton
        onPress={() => navigation.navigate('SearchMajor')}
        title="학과"
      >
        {majorSpecific || '학과를 선택해 주세요.'}
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
      <Button
        onPress={() => {
          if (!yearOfAdmission || !grade || !majorSpecific || !university)
            return

          mutation.mutate(
            {
              birthDay: birth.value,
              email: email.value,
              gender,
              grade,
              major: '지팡스학과',
              marketingPolicy,
              name: name.value,
              nickName: nickname.value,
              privacyPolicy,
              studentId: yearOfAdmission,
              university: '지팡스대학교',
            },
            {
              onSuccess: () => {
                dispatch(reset())
                dispatch(setUserInfo())
                navigation.replace('Main', {
                  params: { isNewUser: true },
                  screen: 'Home',
                })
              },
            }
          )
        }}
        disabled={!yearOfAdmission || !grade || !majorSpecific || !university}
      >
        회원가입 완료
      </Button>
    </Styled.Screen>
  )
}
