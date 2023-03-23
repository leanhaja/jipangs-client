import ProfileImage from '../../../../../assets/images/profile.png'
import Icon from '../../../../components/icon'
import { COLORS } from '../../../../styles/colors'

import * as Styled from './styled'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface CardProps {
  grade: string | undefined
  hasInterestedRigion: boolean
  major: string | undefined
  name: string | undefined
  university: string | undefined
}

export default function Card({
  grade,
  hasInterestedRigion,
  major,
  name,
  university,
}: CardProps) {
  return (
    <Styled.Card>
      <Styled.Profile>
        <Styled.ProfileImage
          contentFit="contain"
          placeholder={blurhash}
          source={ProfileImage}
        />
        <Styled.ProfileText>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Detail>
            {university} {major} {grade}
          </Styled.Detail>
        </Styled.ProfileText>
      </Styled.Profile>
      <Styled.Box>
        <Styled.CheckBox>
          {hasInterestedRigion && (
            <Icon iconName="check" stroke={COLORS.PRIMARY_BLUE} />
          )}
        </Styled.CheckBox>
        <Styled.BoxText>나의 관심지역</Styled.BoxText>
      </Styled.Box>
    </Styled.Card>
  )
}
