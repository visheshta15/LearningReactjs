# useContext
is a React Hook that lets you read and subscribe to context from your component.
`React Context is a way to manage state globally.`
It can be used together with the useState Hook to `share state between deeply nested components` more easily than with useState alone.

`useContext(SomeContext) `
# Parameters
1. `SomeContext`: The context that you’ve previously created with `createContext`. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.

# Return
`useContext returns `the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.

useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().