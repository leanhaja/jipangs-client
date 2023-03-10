import { useState } from 'react'

import Button from '../../../components/button'
import Modal from '../../../features/register/components/InputModal'
import InputShapeButton from '../../../features/register/components/InputShapeButton'
import SearchModal from '../../../features/register/components/SearchModal'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  selectGrade,
  selectYearOfAdmission,
} from '../../../redux/reducers/registerReducer'
import { Grade } from '../../../redux/types'

import * as Styled from './styled'

const YEAR_OF_ADMISSION = ['23학번', '22학번', '21학번', '20학번']

const GRADE: Grade[] = ['1학년', '2학년', '3학년', '4학년', '5학년']

export default function UnivInfoScreen() {
  const dispatch = useAppDispatch()
  const { grade, yearOfAdmission } = useAppSelector((state) => state.register)
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false)
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const handleSelectAdmission = (value: string) => {
    dispatch(selectYearOfAdmission(value))
  }
  const handleSelectGrade = (value: Grade) => {
    dispatch(selectGrade(value))
  }

  const handleUniversityButtonPress = () => setIsSearchModalOpen(true)
  const handleMajorButtonPress = () => setIsSearchModalOpen(true)
  const handleYearOfAdmissonButtonPress = () => setIsAdmissionModalOpen(true)
  const handleGradeButtonPress = () => setIsGradeModalOpen(true)

  return (
    <>
      <SearchModal isVisible={isSearchModalOpen} />
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
        <InputShapeButton onPress={handleUniversityButtonPress} title="대학교">
          대학교를 선택해 주세요.
        </InputShapeButton>
        <Styled.GapNarrow />
        <InputShapeButton onPress={handleMajorButtonPress} title="학과">
          학과를 선택해 주세요.
        </InputShapeButton>
        <Styled.GapNarrow />
        <InputShapeButton
          onPress={handleYearOfAdmissonButtonPress}
          title="학번"
        >
          {yearOfAdmission || '학번를 선택해 주세요.'}
        </InputShapeButton>
        <Styled.GapNarrow />
        <InputShapeButton onPress={handleGradeButtonPress} title="학년">
          {grade || '학년를 선택해 주세요.'}
        </InputShapeButton>
        <Styled.GapWide />
        <Button onPress={() => {}}>회원가입 완료</Button>
      </Styled.Screen>
    </>
  )
}
