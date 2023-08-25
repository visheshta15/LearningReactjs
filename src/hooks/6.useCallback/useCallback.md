function MyComponent() {
  // handleClick is re-created on each render
  const handleClick = () => {
    console.log('Clicked!');
  };

  // ...
}

handleClick is a different function object on every rendering of MyComponent.
Because inline functions are cheap, the re-creation of functions on each rendering is not a problem. A few inline functions per component are acceptable.


But in some cases you need to maintain a single function instance between renderings:
1. A functional component wrapped inside React.memo() accepts a function object as prop
2. When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
3. When the function has some internal state, e.g. when the function is debounced or throttled.

That's when useCallback(callbackFun, deps) is helpful: given the same dependency values deps, the hook returns the same function instance between renderings (aka memoization):

import { useCallback } from 'react';

function MyComponent() {
  // handleClick is the same function object
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  // ...
}

handleClick variable has always the same callback function object between renderings of MyComponent.