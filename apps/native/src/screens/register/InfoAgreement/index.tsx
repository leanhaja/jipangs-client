import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Button from '../../../components/button'
import Divider from '../../../features/infoAgreement/components/Divider'
import MainDescriptionBar from '../../../features/infoAgreement/components/MainDescriptionBar'
import SubDescriptionBar from '../../../features/infoAgreement/components/SubDescriptionBar'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {
  toggleAllPolicy,
  toggleMarketingPolicy,
  togglePrivacyPolicy,
  toggleTermOfUse,
} from '../../../redux/reducers/registerReducer'
import {
  RegisterStackParamList,
  RootStackParamList,
} from '../../../types/navigation'

import * as Styled from './styled'

type InfoAgreementScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RegisterStackParamList, 'InfoAgreement'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function InfoAgreementScreen({
  navigation,
}: InfoAgreementScreenProps) {
  const dispatch = useAppDispatch()
  const { allPolicy, marketingPolicy, privacyPolicy, termOfUse } =
    useAppSelector((state) => state.register)

  const handlePressAllPolicy = () => dispatch(toggleAllPolicy())
  const handleTermOfUseButton = () => dispatch(toggleTermOfUse())
  const handleTermOfUseLink = () =>
    navigation.navigate('ExternalLink', {
      link: 'https://twilight-snow-7e6.notion.site/05409d44c8244908a754967f443c3b8a',
      title: '이용약관 동의',
    })
  const handlePressPrivacyPolicyButton = () => dispatch(togglePrivacyPolicy())
  const handlePressPrivacyPolicyLink = () =>
    navigation.navigate('ExternalLink', {
      link: 'https://twilight-snow-7e6.notion.site/09833f789449455da1a35886532cd37b',
      title: '개인정보 처리방침 동의',
    })
  const handlePressMarketingPolicyButton = () =>
    dispatch(toggleMarketingPolicy())
  const handlePressMarketingPolicyLink = () =>
    navigation.navigate('ExternalLink', {
      link: 'https://twilight-snow-7e6.notion.site/6126f8cbf515497380157781eb71319c',
      title: '마케팅 정보 수신 동의',
    })
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
        checked={termOfUse}
        onPressButton={handleTermOfUseButton}
        onPresslink={handleTermOfUseLink}
        text="(필수) 이용약관 동의"
      />
      <Styled.GapNarrow />
      <SubDescriptionBar
        checked={privacyPolicy}
        onPressButton={handlePressPrivacyPolicyButton}
        onPresslink={handlePressPrivacyPolicyLink}
        text="(필수) 개인정보 처리방침 동의"
      />
      <Styled.GapNarrow />
      <SubDescriptionBar
        checked={marketingPolicy}
        onPressButton={handlePressMarketingPolicyButton}
        onPresslink={handlePressMarketingPolicyLink}
        text="(선택) 마케팅 정보 수신 동의"
      />
      <Styled.GapWide />
      <Button
        disabled={!privacyPolicy || !termOfUse}
        onPress={handlePressNextButton}
      >
        다음
      </Button>
      <Styled.GapWide />
    </Styled.Screen>
  )
}
