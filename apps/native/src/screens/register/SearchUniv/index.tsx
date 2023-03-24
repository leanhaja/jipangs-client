import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import TextButton from '../../../components/text-button'
import Input from '../../../features/register/components/SearchModal/Input'
import { queryKeys } from '../../../react-query/constants'
import { useAppDispatch } from '../../../redux/hooks'
import { setUniversity } from '../../../redux/reducers/registerReducer'
import jipangs from '../../../service/jipangs'
import { RegisterStackProps } from '../../../types/navigation'

import * as Styled from './styled'

const getSearchResult = async (name: string) => {
  const { data } = await jipangs.getUniversityList(name)
  return data.response.map((value) => value.name)
}

export default function SearchUnivScreen({
  navigation,
}: RegisterStackProps<'SearchUniv'>) {
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
          {data?.map((university, index) => (
            <TextButton
              key={`${index + 1}-${university}`}
              onPress={() => {
                dispatch(setUniversity(university))
                setText('')
                navigation.pop()
              }}
            >
              {university}
            </TextButton>
          ))}
        </Styled.List>
      )}
    </Styled.Screen>
  )
}
