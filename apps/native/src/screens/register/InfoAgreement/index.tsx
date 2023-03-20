import Button from '../../../components/button'
import Divider from '../../../features/infoAgreement/components/Divider'
import MainDescriptionBar from '../../../features/infoAgreement/components/MainDescriptionBar'
import SubDescriptionBar from '../../../features/infoAgreement/components/SubDescriptionBar'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  toggleAllPolicy,
  toggleMarketingPolicy,
  togglePrivacyPolicy,
} from '../../../redux/reducers/registerReducer'
import { RegisterStackProps } from '../../../types/navigation'

import * as Styled from './styled'

export default function InfoAgreementScreen({
  navigation,
}: RegisterStackProps<'InfoAgreement'>) {
  const dispatch = useAppDispatch()
  const { allPolicy, marketingPolicy, privacyPolicy } = useAppSelector(
    (state) => state.register
  )

  const handlePressAllPolicy = () => dispatch(toggleAllPolicy())
  const handlePressPrivacyPolicy = () => dispatch(togglePrivacyPolicy())
  const handlePressMarketingPolicy = () => dispatch(toggleMarketingPolicy())
  const handlePressNextButton = () => navigation.navigate('SelectMajor')

  return (
    <Styled.Screen>
      <MainDescriptionBar
        checked={allPolicy}
        onPress={handlePressAllPolicy}
        text="전체동의"
      />
      <Styled.GapNarrow />
      <Divider />
      <Styled.GapMedium />
      <SubDescriptionBar
        checked={privacyPolicy}
        onPress={handlePressPrivacyPolicy}
        text="(필수) 이용약관 동의"
      />
      <Styled.GapNarrow />
      <SubDescriptionBar
        checked={marketingPolicy}
        onPress={handlePressMarketingPolicy}
        text="(선택) 마케팅 정보 수신 동의"
      />
      <Styled.GapWide />
      <Button disabled={!privacyPolicy} onPress={handlePressNextButton}>
        다음
      </Button>
      <Styled.GapWide />
    </Styled.Screen>
  )
}
