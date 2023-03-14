import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ExternalLink from '../screens/external-link'
import { type RootStackParamList } from '../types'

import BottomNavigator from './bottom-navigator'

const STACK = createNativeStackNavigator<RootStackParamList>()

function StackNavigator() {
  return (
    <STACK.Navigator initialRouteName="BottomTabNavigator">
      <STACK.Screen
        component={BottomNavigator}
        name="BottomTabNavigator"
        options={{ headerShown: false }}
      />
      <STACK.Screen
        component={ExternalLink}
        name="ExternalLink"
        options={{ headerShown: false }}
      />
    </STACK.Navigator>
  )
}

export default StackNavigator
