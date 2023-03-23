import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import TextButton from '../../../components/text-button'
import Input from '../../../features/register/components/SearchModal/Input'
import { queryKeys } from '../../../react-query/constants'
import { useAppDispatch } from '../../../redux/hooks'
import { setMajor } from '../../../redux/reducers/registerReducer'
import jipangs from '../../../service/jipangs'
import { RegisterStackProps } from '../../../types/navigation'

import * as Styled from './styled'

const getSearchResult = async (name: string) => {
  const { data } = await jipangs.getMajorList(name)
  return data.response.map((value) => value.name)
}

export default function SearchMajorScreen({
  navigation,
}: RegisterStackProps<'SearchMajor'>) {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  const { data } = useQuery([queryKeys.universities, text], {
    enabled: !!text,
    queryFn: async () => getSearchResult(text),
  })

  const handleTextChange = (typedText: string) => {
    setText(typedText)
  }

  return (
    <Styled.Screen>
      <Input
        hasValue={!!text}
        onChangeText={handleTextChange}
        onClickClose={() => setText('')}
        value={text}
      />
      {!!data?.length && (
        <Styled.List>
          {data?.map((major, index) => (
            <TextButton
              key={`${index + 1}-${major}`}
              onPress={() => {
                dispatch(setMajor(major))
                setText('')
                navigation.pop()
              }}
            >
              {major}
            </TextButton>
          ))}
        </Styled.List>
      )}
    </Styled.Screen>
  )
}
