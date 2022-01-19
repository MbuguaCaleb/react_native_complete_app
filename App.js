import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder='Course Goal'
          style={{
            width: '80%',
            borderColor: 'black',
            borderBottomWidth: 1,
            padding: 10,
          }}
        />
        <Button title='ADD' />
      </View>

      <View></View>
    </View>
  )
}

//i can clearly look at this Objecr
const styles = StyleSheet.create({})
