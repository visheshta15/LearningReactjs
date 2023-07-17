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

# Writing `fetch` calls inside Effects is a `popular way to fetch data`, especially in fully client-side apps. This is, however, a very manual approach and it has significant downsides:
1. `Effects don’t run on the server`. This means that the initial server-rendered HTML will only include a loading state with no data. The client computer will have to download all JavaScript and render your app only to discover that now it needs to load the data. This is not very efficient.
2. `Fetching directly in Effects makes it easy to create “network waterfalls`”. You render the parent component, it fetches some data, renders the child components, and then they start fetching their data. If the network is not very fast, this is significantly slower than fetching all data in parallel.
3. `Fetching directly in Effects usually means you don’t preload or cache data`. For example, if the component unmounts and then mounts again, it would have to fetch the data again.
4. `It’s not very ergonomic`. There’s quite a bit of boilerplate code involved when writing fetch calls in a way that doesn’t suffer from bugs like race conditions.

# Avoid using an object created during rendering as a dependency. Instead, create the object inside the Effect:
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = { // 🚩 This object is created from scratch on every re-render
    serverUrl: serverUrl,
    roomId: roomId
  };

  useEffect(() => {
    const connection = createConnection(options); // It's used inside the Effect
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // 🚩 As a result, these dependencies are always different on a re-render
  // ...


# Removing unnecessary function dependencies
If your Effect depends on an object or a function created during rendering, it might run too often. For example, this Effect re-connects after every render because the createOptions function is different for every render:
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() { // 🚩 This function is created from scratch on every re-render
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions(); // It's used inside the Effect
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // 🚩 As a result, these dependencies are always different on a re-render
  // ...