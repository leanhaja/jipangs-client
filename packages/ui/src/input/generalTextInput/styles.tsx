import { StyleSheet } from 'react-native'

import COLORS from '../../constants/color'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: 96,
  },
  error: {
    color: COLORS.POINT_RED,
    fontSize: 12,
    marginTop: 8,
    paddingLeft: 16,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: COLORS.GREY3,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 16,
  },
  invalid: {
    borderColor: COLORS.POINT_RED,
  },
  placeholder: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valid: {
    borderColor: COLORS.PRIMARY_BLUE,
  },
})
