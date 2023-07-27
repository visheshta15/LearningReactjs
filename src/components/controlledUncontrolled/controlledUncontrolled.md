# Uncontrolled Components: 
Uncontrolled Components are the components that are `not controlled by the React state` and `are handled by the DOM (Document Object Model)`. `So in order to access any value that has been entered we take the help of refs.`

For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

`uncontrolled component react does not use state.`Thus uncontrolled components d`o not depend on any state of input elements` or `any event handler`. This type of component does `not care about real-time input changes`.


--> Uncontrolled components react and act more like traditional HTML form elements. The data from the input fields are not stored in the react state, but the data is stored in the DOM itself. Instead of using any event handler setState() to update the value according to the changes by the user, we are provided with a ref to retrieve values from the DOM.
Refs in react environment work like a pointer that provides us access to the DOM nodes










# Controlled Components: 
In React, Controlled Components are those in which `form’s data is handled by the component’s state`. It `takes its current value through props` and `makes changes through callbacks like onClick, onChange, etc.` A parent component manages its own state and passes the new values as props to the controlled component.

-->A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState(). Also, the component controls the render and keeps the data of form in the component state.

-->`When we link the component state with the HTML elements`, we are following "a single source of truth" as described by the documentation of the react. This means that `react tracks all the changes with the help of the internal state and re-renders the component whenever there is a change`.

# advantage:
1. The instant validation check is one of the major benefits of using the controlled component over the uncontrolled component in react.
2.You can have validation checks on every keystroke of the user when using controlled components in react. 
This is because we can access the input value at every time with the help of react state, whereas, in an `uncontrolled component, the input value is only available when the form is submitted by the user`