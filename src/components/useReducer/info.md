# useReducer

-   useReducer is a hook that is used for **state management**.
-   It is an alternative to useState.
-   useState is built usingh useReducer.
-   It is related to reduce function
-   useReducer(reducer, initalState)
-   reducer(currentState, aciton)

### reduce vs useReducer

#### **reduce in JavaScript**

-   array.reduce(reducer, initalValue)
-   singleValue = reducer(accumulator, itemValue)
-   reduce method returns single value

#### **useReducer in JavaScript**

-   useReducer(reducer, initalState)
-   newState = reducer(currentState, action)
-   useReducer returns a pair of values. [newState, dispatch].

## Benifit

There are two scenarios
