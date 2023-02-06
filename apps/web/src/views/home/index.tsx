import { Button } from 'ui'

import * as Styled from './styled'

export default function Home() {
  return (
    <Styled.Container>
      <h1>Web With Emotion</h1>
      <Button
        onClick={() => {
          console.log('Pressed!')
          alert('Pressed!')
        }}
        text="Boop"
      />
    </Styled.Container>
  )
}
