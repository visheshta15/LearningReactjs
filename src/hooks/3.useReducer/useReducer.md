# useReducer

`useReducer` is a React Hook that lets you add a `reducer` to your component.
Call useReducer at the top level of your component to manage its state with a reducer.

`const [state, dispatch] = useReducer(reducer, initialArg, init?)`

# Parameters 
1. `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
2. `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
3. optional `init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

# Returns 
useReducer returns an array with exactly two values:
1. The `current state`. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
2. The `dispatch function` that lets you update the state to a different value and trigger a re-render.

React will set the next state to the result of calling the reducer function you’ve provided with the current state and the action you’ve passed to dispatch.

--> To update what’s on the screen, call `dispatch` with an object representing what the user did, called an `action`:
function handleClick() {
  dispatch({ type: 'incremented_age' });
}

--> React will pass the `current state` and the `action` to your `reducer function`. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI.


# Comparing useState and useReducer
--> useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component

1. `Code size`: Generally, with useState you have to write less code upfront. With useReducer, you have to write both a reducer function and dispatch actions. However, useReducer can help cut down on the code if many event handlers modify state in a similar way.
2. `Readability`: useState is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, useReducer lets you cleanly separate the how of update logic from the what happened of event handlers.
3. `Debugging`: When you have a bug with useState, it can be difficult to tell where the state was set incorrectly, and why. With useReducer, you can add a console log into your reducer to see every state update, and why it happened (due to which action). If each action is correct, you’ll know that the mistake is in the reducer logic itself. However, you have to step through more code than with useState.
4. `Testing`: A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.


# Troubleshooting

# Calling the dispatch function does not change state in the running code:
I’ve dispatched an action, but logging gives me the old state value 

function handleClick() {
  console.log(state.age);  // 42

  dispatch({ type: 'incremented_age' }); // Request a re-render with 43
  console.log(state.age);  // Still 42!

  setTimeout(() => {
    console.log(state.age); // Also 42!
  }, 5000);
}

# React will ignore your update if the next state is equal to the previous state, as determined by an Object.is comparison
This usually happens when you change an object or an array in state directly:

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 Wrong: mutating existing object
      state.age++;
      return state;
    }
    case 'changed_name': {
      // 🚩 Wrong: mutating existing object
      state.name = action.nextName;
      return state;
    }
    // ...
  }
}

# I’m getting an error: “Too many re-renders” 
this means that you’re unconditionally dispatching an action during render, so your component enters a loop: render, dispatch (which causes a render), render, dispatch (which causes a render), and so on. Very often, this is caused by a mistake in specifying an event handler:
// 🚩 Wrong: calls the handler during render
return <button onClick={handleClick()}>Click me</button>

// ✅ Correct: passes down the event handler
return <button onClick={handleClick}>Click me</button>

// ✅ Correct: passes down an inline function
return <button onClick={(e) => handleClick(e)}>Click me</button>