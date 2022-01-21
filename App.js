import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  //React Narive events are much more powerful
  //eg on change Text i dont have to pass param manually
  //They are also different from the Web beecause they are of different Native Components/
  //Covered So far
  //(a)onChangeText
  //(b)onPress
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  //add new Goal
  const addGoalHandler = () => {
    //using the spread Operator to add new elements into the courseGoals array
    // setCourseGoals([...courseGoals, enteredGoal])
    //Better syntax guaranteed to get my CurrentStateSnapshot
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>

      {/* output list of items/setGoals */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  )
}

//i can clearly look at this Objecr
//The stylesheet is an Object that comes from Javascript
//Advantages:
//(a)Performance optimization/
//(b)It has got better error checking.React Native will detect erronious Values.
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
})
