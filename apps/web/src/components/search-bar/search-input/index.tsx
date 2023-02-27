import { ChangeEvent, useEffect, useRef, useState } from 'react'

import * as Styled from './styled'

import IconButton from '@/components/icon-button'

export interface SearchInputProps {
  className?: string
  onBackButtonClick?: VoidFunction
  onSearchInputChange?: (text: string) => void
}

function SearchInput({
  className,
  onBackButtonClick,
  onSearchInputChange,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')

  const onCancelButtonClick = () => {
    setText('')
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value
    setText(inputText)
    onSearchInputChange?.(inputText)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Styled.SearchInputContainer className={className}>
      <IconButton
        ariaLabel="뒤로가기"
        iconName="before_arrow"
        onClick={onBackButtonClick}
      />
      <Styled.SearchInput
        ref={inputRef}
        onChange={onInputChange}
        value={text}
      />
      <IconButton
        ariaLabel="검색취소"
        iconName="x"
        onClick={onCancelButtonClick}
      />
    </Styled.SearchInputContainer>
  )
}

export default SearchInput
