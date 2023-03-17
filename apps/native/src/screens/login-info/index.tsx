import * as Styled from './styled'

export default function LoginInfo() {
  return (
    <Styled.Screen>
      <Styled.Label>로그인 계정</Styled.Label>
      <Styled.IdWrapper />
      <Styled.Button>
        <Styled.Text>로그아웃</Styled.Text>
      </Styled.Button>
      <Styled.Button>
        <Styled.Text>탈퇴하기</Styled.Text>
      </Styled.Button>
    </Styled.Screen>
  )
}
