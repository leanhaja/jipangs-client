import { StyleSheet } from 'react-native'

import { COLORS } from '../../../../styles/colors'

export const styles = StyleSheet.create({
  apple: {
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    justifyContent: 'center',
    width: 343,
  },
  kakao: {
    backgroundColor: COLORS.YELLOW_KAKAO,
    color: COLORS.BLACK,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
    marginLeft: 8,
  },
})
