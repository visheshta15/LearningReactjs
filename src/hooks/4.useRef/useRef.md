# UseRef
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

`const ref = useRef(initialValue)`

# Parameters 
`initialValue`: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.

# Returns 
useRef returns an `object with a single property`:

`current`: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

On the `next renders`, `useRef will return the same object.`

# Caveats/limitation
1. When you `change` the `ref.current property`, React does `not re-render` your component. React is not aware of when you change it because a ref is a plain JavaScript object.
2. You can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object

# Changing a ref does not trigger a re-render
This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property:

function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}

Later, you can read that interval ID from the ref

function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}

# By using a ref, you ensure that:

1. You can `store information between re-renders` (unlike regular variables, which reset on every render).

2. Changing it `does not trigger a re-render` (unlike state variables, which trigger a re-render).
Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead.

3. The` information is local` to each copy of your component (unlike the variables outside, which are shared).

# Do not write or read ref.current during rendering.
React expects that the body of your component behaves like a pure function:
1. If the inputs (props, state, and context) are the same, it should return exactly the same JSX.
2. Calling it in a different order or with different arguments should not affect the results of other calls.
Reading or writing a `ref during rendering breaks these expectations`.

function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}

`You can read or write refs from event handlers or effects instead.`
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}

`If you have to read or write` something `during rendering`, `use state instead`.
When you break these rules, your component might still work, but most of the newer features we’re adding to React will rely on these expectations

--> `React will set the current property back to null when the node is removed from the screen.`