# useEffect
This hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. 
lets you synchronize a component with an external system.
`useEffect(setup, dependencies?)`

# Definition
Call useEffect at the top level of your component to declare an `Effect`:

# Parameters 
`setup`: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.

`optional dependencies`: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.

# Returns 
`useEffect` returns `undefined`.

# Caveats /warning
1. useEffect is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
2. If you’re not trying to synchronize with some external system, you probably don’t need an Effect.

`external system means any piece of code that’s not controlled by React`
1. A timer managed with `setInterval()` and `clearInterval()`.
2. An event subscription using `window.addEventListener()` and `window.removeEventListener()`.
3. A third-party animation library with an API like `animation.start()` and `animation.reset()`.
If you’re not connecting to any external system, you probably don’t need an Effect.