import { useEffect, useRef, useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native'

import IconButton from '../../icon-button'

import * as Styled from './styled'

export interface SearchInputProps {
  onBackButtonClick?: VoidFunction
  onCancelButtonClick?: VoidFunction
  onSearchInputChange?: (text: string) => void
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void
  style?: StyleProp<ViewStyle>
}

function SearchInput({
  onBackButtonClick,
  onCancelButtonClick,
  onSearchInputChange,
  onSubmitEditing,
  style,
}: SearchInputProps) {
  const inputRef = useRef<TextInput>(null)
  const [text, setText] = useState('')

  const handleCancelButtonClick = () => {
    setText('')
    onCancelButtonClick?.()
  }

  const onInputChange = (inputText: string) => {
    setText(inputText)
    onSearchInputChange?.(inputText)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Styled.SearchInputContainer style={style}>
      <IconButton iconName="before_arrow" onClick={onBackButtonClick} />
      <TextInput
        ref={inputRef}
        style={{
          flex: 1,
          marginHorizontal: 4,
          marginVertical: 0,
          width: '100%',
        }}
        onChangeText={onInputChange}
        onSubmitEditing={onSubmitEditing}
        value={text}
      />
      <IconButton iconName="x" onClick={handleCancelButtonClick} />
    </Styled.SearchInputContainer>
  )
}

export default SearchInput
