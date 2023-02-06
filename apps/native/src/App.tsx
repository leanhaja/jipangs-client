import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'ui'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log('Pressed!')
          alert('Pressed!')
        }}
        text="Boop"
      />
    </View>
  )
}
