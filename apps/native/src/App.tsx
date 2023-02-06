import styled from '@emotion/native'
import { Button } from 'ui'

const Container = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
  justify-content: center;
`

const Header = styled.Text`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`

export default function Native() {
  return (
    <Container>
      <Header>Native With Emotion</Header>
      <Button
        onClick={() => {
          console.log('Pressed!')
          alert('Pressed!')
        }}
        text="Boop"
      />
    </Container>
  )
}
