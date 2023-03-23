import { useMutation, useQuery } from '@tanstack/react-query'

import Icon from '../../components/icon'
import { queryKeys } from '../../react-query/constants'
import { useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux/reducers/authReducer'
import jipangs from '../../service/jipangs'

import * as Styled from './styled'

const getUserInfo = async () => {
  const { data } = await jipangs.getUserInfo()
  return data
}

const deleteUser = async () => {
  const { data } = await jipangs.deleteUser()
  return data
}

export default function LoginInfo() {
  const dispatch = useAppDispatch()
  const { data } = useQuery([queryKeys.userInfo], getUserInfo)
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      dispatch(logout())
    },
  })

  const handleDeleteUserButton = () => {
    mutation.mutate()
  }

  return (
    <Styled.Screen>
      <Styled.GapWide />
      <Styled.Label>로그인 계정</Styled.Label>
      <Styled.GapNarrow />
      <Styled.EmailWrapper>
        <Icon iconName="kakao_square" />
        <Styled.Email>{data?.body.user.email}</Styled.Email>
      </Styled.EmailWrapper>
      <Styled.GapMedium />
      <Styled.Button>
        <Styled.Text onPress={() => dispatch(logout())}>로그아웃</Styled.Text>
      </Styled.Button>
      <Styled.Button>
        <Styled.Text onPress={handleDeleteUserButton}>탈퇴하기</Styled.Text>
      </Styled.Button>
    </Styled.Screen>
  )
}
