import { useMutation } from '@tanstack/react-query'
import { Switch } from 'react-native'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { toggleMarketingPolicy } from '../../redux/reducers/registerReducer'
import jipangs from '../../service/jipangs'
import { COLORS } from '../../styles/colors'
import { UserInfo } from '../../types/axios'

import * as Styled from './styled'

export default function SetAgreementScreen() {
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
  const mutation = useMutation({
    mutationFn: (data: UserInfo) => jipangs.postUserInfo(data),
  })

  const toggleMarketingSwitch = () => {
    mutation.mutate(
      {
        birthDay: birth.value,
        email: email.value,
        gender: gender!,
        grade: grade!,
        major: majorSpecific,
        marketingPolicy: !marketingPolicy,
        name: name.value,
        nickName: nickname.value,
        privacyPolicy,
        studentId: yearOfAdmission,
        university,
      },
      { onSuccess: () => dispatch(toggleMarketingPolicy()) }
    )
  }

  return (
    <Styled.Screen>
      <Styled.Container>
        <Styled.Text>마케팅 정보 수신 동의</Styled.Text>
        <Switch
          ios_backgroundColor={COLORS.GREY4}
          onValueChange={() => toggleMarketingSwitch()}
          thumbColor={COLORS.WHITE}
          trackColor={{ false: COLORS.GREY4, true: COLORS.PRIMARY_BLUE }}
          value={marketingPolicy}
        />
      </Styled.Container>
    </Styled.Screen>
  )
}
