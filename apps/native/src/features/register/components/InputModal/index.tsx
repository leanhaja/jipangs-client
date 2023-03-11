import { Dispatch, Fragment, useCallback, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import Item from './Item'
import * as Styled from './styled'

interface ModalProps<T> {
  onCloseModal: Dispatch<React.SetStateAction<boolean>>
  onSelect: (value: T) => void
  options: T[]
  title: string
}

export default function Modal<T extends string>({
  onCloseModal,
  onSelect,
  options,
  title,
}: ModalProps<T>) {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(1000)).current

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  const slideIn = useCallback(() => {
    Animated.timing(slideAnim, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }, [slideAnim])
  const slideOut = useCallback(() => {
    Animated.timing(slideAnim, {
      duration: 1000,
      toValue: 1000,
      useNativeDriver: true,
    }).start(() => onCloseModal(false))
  }, [onCloseModal, slideAnim])

  useEffect(() => {
    fadeIn()
    slideIn()
  }, [fadeIn, slideIn])

  return (
    <Styled.Backdrop style={{ opacity: fadeAnim }}>
      <Styled.Modal style={{ transform: [{ translateY: slideAnim }] }}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.GapWide />
        {options.map((grade, index) => (
          <Fragment key={`${grade}-${index + 1}`}>
            <Styled.GapNarrow />
            <Item
              onPress={() => {
                onSelect(grade)
                slideOut()
                fadeOut()
              }}
            >
              {grade}
            </Item>
          </Fragment>
        ))}
      </Styled.Modal>
    </Styled.Backdrop>
  )
}
