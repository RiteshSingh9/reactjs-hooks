# React Hooks

## What are Hooks

Hooks are new reactjs features that were introduced in React 16.8 which allow you to use React fetures without having to write a class.

Ex:- State of a component.

**NOTE**:- Hooks don't work in class component.

## Why Hooks ?

#### **Reason set 1**

-   Understand how **this** keyword works in JS.
-   Remember to bind event handlers to class component.
-   classes don't minify very waell and make hot reloading very unreliadble.

#### **Reason set 2**

-   There is no particular way to reuse stateful component logic.
-   HOC and render props pattern do address this problem.
-   Makes the code harder to follow.
-   There is no need a to share stateful logic in bettear way.

#### **Reason set 3**

-   Create components for complex scenarios such as data fetfching and subscribing to event.
-   Related code is not orgainzed in one place.

    Ex: Data fetching - In componentDidMount and componentDidUpdate
    Ex: Event listeners - In componentDidMount and comonentWillUnmount

    Because of stateful logic - cannot break into smaller ones.

## Noteworthy Points

-   Hooks don't contain any breaking changes and are 100% backward compatible.
-   Classes won't be removed from React.
-   Can't Hooks inside classe components.
