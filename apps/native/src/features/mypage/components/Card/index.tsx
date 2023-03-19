import ProfileImage from '../../../../../assets/images/profile.png'
import Icon from '../../../../components/icon'

import * as Styled from './styled'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function Card() {
  return (
    <Styled.Card>
      <Styled.Profile>
        <Styled.ProfileImage
          contentFit="contain"
          placeholder={blurhash}
          source={ProfileImage}
        />
        <Styled.ProfileText>
          <Styled.Name>지팡스</Styled.Name>
          <Styled.Detail>CMC대학교 지팡스학과 18</Styled.Detail>
        </Styled.ProfileText>
      </Styled.Profile>
      <Styled.Box>
        <Styled.CheckBox>
          <Icon iconName="check" />
        </Styled.CheckBox>
        <Styled.BoxText>나의 관심지역</Styled.BoxText>
      </Styled.Box>
    </Styled.Card>
  )
}
