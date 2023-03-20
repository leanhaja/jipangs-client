import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles/colors'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: COLORS.PRIMARY_BLUE,
    borderRadius: 8,
    display: 'flex',
    height: 59,
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: COLORS.GREY2,
    color: COLORS.GREY4,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: 'Pretendard-SemiBold',
  },
})
