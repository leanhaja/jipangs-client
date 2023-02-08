import { StyleSheet } from 'react-native'

import COLORS from '../../constants/color'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: 79,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: COLORS.BLACK,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    height: 56,
    paddingHorizontal: 16,
  },
  placeholder: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
