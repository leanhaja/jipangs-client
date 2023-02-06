import { Button } from 'ui'

import * as Styled from './styled'

export default function Home() {
  return (
    <Styled.Container>
      <h1>Web</h1>
      <Button onClick={() => console.log('Pressed!')} text="Boop" />
    </Styled.Container>
  )
}
