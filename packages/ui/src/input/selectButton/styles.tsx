import { StyleSheet } from 'react-native'

import COLORS from '../../constants/color'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.GREY1,
    borderRadius: 8,
    display: 'flex',
    height: 44,
    justifyContent: 'center',
    width: 164,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: 79,
  },
  selected: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    color: COLORS.WHITE,
  },
  text: {
    color: COLORS.GREY4,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
