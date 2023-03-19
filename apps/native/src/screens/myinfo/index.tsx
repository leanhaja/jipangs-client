import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import SwitchButton from '../../features/myinfo/components/SwitchButton'

import * as Styled from './styled'
import UnivInfo from './univinfo'
import UserInfo from './userinfo'

export default function UserInfoPage() {
  const [option, setOption] = useState<string>('회원정보')

  return (
    <KeyboardAwareScrollView>
    <Styled.Screen>
      <SwitchButton
        option1="회원정보"
        option2="대학정보"
        selectedOption={option}
        setOption={setOption}
        />
      {option === '회원정보' ? <UserInfo /> : <UnivInfo />}
    </Styled.Screen>
        </KeyboardAwareScrollView>
  )
}
