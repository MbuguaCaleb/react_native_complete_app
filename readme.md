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

**Notes By**

```

Mbugua Caleb

```
