import { StyleSheet } from 'react-native'

import COLORS from '../../constants/color'

export const styles = StyleSheet.create({
  container: { alignSelf: 'flex-start', flexDirection: 'row' },
  isRequired: {
    color: COLORS.POINT_RED,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
})
