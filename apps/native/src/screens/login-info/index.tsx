import { useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux/reducers/authReducer'

import * as Styled from './styled'

export default function LoginInfo() {
  const dispatch = useAppDispatch()

  return (
    <Styled.Screen>
      <Styled.Label>로그인 계정</Styled.Label>
      <Styled.IdWrapper />
      <Styled.Button>
        <Styled.Text onPress={() => dispatch(logout())}>로그아웃</Styled.Text>
      </Styled.Button>
      <Styled.Button>
        <Styled.Text>탈퇴하기</Styled.Text>
      </Styled.Button>
    </Styled.Screen>
  )
}
