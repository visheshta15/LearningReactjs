# useState 
is a React Hook that lets you add a state variable to your component.</p>
      
# Usage      
Adding state to a component
Updating state based on the previous state
Storing information from previous renders

# Destructuring 
assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient

-->`const [state, setState] = useState(initialState)`
The convention is to name state variables like [something, setSomething] using `array destructuring.`

`useState returns` an array with exactly two values:
1. The `current state`. During the first render, it will match the initialState you have passed.

2. The `set function` that lets you update the state to a different value and trigger a re-render.
You can pass the next state directly, or a function that calculates it from the previous state:
setName('Taylor');
 setAge(a => a + 1);

-->React will store the next state, render your component again with the new values, and update the UI.

# The difference between passing an updater and passing the next state directly
1. passing the next state directly
the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

2. passing an updater
updater function. It takes the pending state and calculates the next state from it