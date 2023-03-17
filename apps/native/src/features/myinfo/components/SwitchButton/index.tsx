import { Dispatch, SetStateAction } from 'react'
import { Pressable } from 'react-native'

import * as Styled from './styled'

interface SwitchButtonProps {
  option1: string
  option2: string
  selectedOption: string
  setOption: Dispatch<SetStateAction<string>>
}

export default function SwitchButton({
  option1,
  option2,
  selectedOption,
  setOption,
}: SwitchButtonProps) {
  return (
    <Styled.Container>
      <Pressable>
        <Styled.Button
          onPress={() => setOption('회원정보')}
          selected={selectedOption === '회원정보'}
        >
          {option1}
        </Styled.Button>
      </Pressable>
      <Styled.Divider />
      <Pressable>
        <Styled.Button
          onPress={() => setOption('대학정보')}
          selected={selectedOption === '대학정보'}
        >
          {option2}
        </Styled.Button>
      </Pressable>
    </Styled.Container>
  )
}
