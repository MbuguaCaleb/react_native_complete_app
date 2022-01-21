**Core React Native Components**

```
(a)View


It is like a div in the HTML World.

You can style it or wrap other elements with it.

It is the most basic component in React Native.

Views can be nested into each Other so that i can build each layout i want.

```

```
(b)Text

It is used for outputting Text.

All the Text must be in this <Text> component.


This is a rule.


A view is mainly there to apply styles or to LayOut the Component.


```

```

Wow! React native has got very little core components but we can be able to build any application
that we want as we shall see.


```

**Styling**

```
The dynamic value passed to reactnative style is an Object.

```

**Flex Properies**

```
(a)Flex direction-Aligns a flex item to either row or Column.

(b)Justify-Content---Determines the alignment of an element along its parent axis.

(c)Align-items----aligns the flex items along their cross axis.


```

**Inline stlying**

```
As you write more and more code, there comes a point where inline styling becomes cumbersome for your project.

It is therefore recommended that we use a stlyesheet Object.

//i can clearly look at this Objecr
//The stylesheet is an Object that comes from Javascript
//Advantages:
//(a)Performance optimization/
//(b)It has got better error checking.React Native will detect erronious Values.

```

**React Native Events**

```
 //React Narive events are much more powerful
  //eg on change Text i dont have to pass param manually
  //They are also different from the Web beecause they are of different Native Components/
  //Covered So far
  //(a)onChangeText
  //(b)onPress

Better sytax for updating myState
 //using the spread Operator to add new elements into the courseGoals array
// setCourseGoals([...courseGoals, enteredGoal])

//Better syntax guaranteed to get my CurrentStateSnapshot

setEnteredGoals((currentGoals) => [...currentGoals, enteredGoal])


```

**React Components**

```
(a)ScrollView

 Default behavior of react Native is not to allow scrolling.

 Thus when i have a list of items exceeding the screensize, i must apply scrolling.

(b)FlatList

It is a better way of looping through a List of Items.

It takes in two props(data and render items)

It takes in data as a prop and then gives you an iteration of items that will be lopped through
Adavanatages

It automatically asigns the Keys but the data being passed into it must be properly formatted and must
have a key...

Thus i must not declare a key prop when looping through a flat List.

To extract data after it has been looped i must have extract the item propery as shownBelow.

 <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
  />

Very Imprtant

To alter the flat List behavior of always expecting a key in your data there is a work around.

I override the default key in a flat list using KeyExtractor.

 <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
  />

```

**Notes By**

```

Mbugua Caleb

```
