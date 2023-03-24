import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import TextButton from '../../../../components/text-button'
import { queryKeys } from '../../../../react-query/constants'
import { useAppDispatch } from '../../../../redux/hooks'
import { setUniversity } from '../../../../redux/reducers/registerReducer'
import jipangs from '../../../../service/jipangs'

import Input from './Input'
import * as Styled from './styled'

interface SearchModalProps {
  isVisible: boolean
}

const getSearchResult = async (name: string) => {
  const { data } = await jipangs.getUniversityList(name)
  return data.response.map((value) => value.name)
}

export default function SearchModal({ isVisible }: SearchModalProps) {
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
    <Styled.Modal
      animationType="slide"
      hardwareAccelerated
      presentationStyle="fullScreen"
      visible={isVisible}
    >
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            alignItems: 'center',
            alignSelf: 'stretch',
            flex: 1,
          }}
        >
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
                  onPress={() => dispatch(setUniversity(university))}
                >
                  {university}
                </TextButton>
              ))}
            </Styled.List>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </Styled.Modal>
  )
}
