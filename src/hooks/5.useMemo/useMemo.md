# useMemo
--> useMemo is a React Hook that `lets you cache the result of a calculation between re-renders`.
--> The useMemo `returns a memoized value`
    In Computer Science, `memoization` is a concept used in general when we don't need to recompute the function with a given argument for the next time as it returns the cached result.
-->This can significantly improve the performance of your application, particularly if you have complex or time-consuming computations that need to be done in your components. It's important to note that you should only use useMemo when you have expensive computations that need to be memoized.

`const cachedValue = useMemo(calculateValue, dependencies)`

# Parameters 
1. `calculateValue`: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.

2. `dependencies`: The list of all reactive values referenced inside of the calculateValue code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison.

# Returns 
On the initial render, useMemo returns the result of calling calculateValue with no arguments.
During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.

# ---------------------------------------------------------------------------
You need to pass two things to useMemo:

1. A `calculation function` that takes no arguments, like () =>, and returns what you wanted to calculate.
2. A `list of dependencies` including every value within your component that’s used inside your calculation.
On the initial render, the value you’ll get from useMemo will be the result of calling your calculation.

On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render. If none of the dependencies have changed (compared with Object.is), useMemo will return the value you already calculated before. Otherwise, React will re-run your calculation and return the new value.

# Advantage / Usage
1. You should only rely on useMemo as a performance optimization.
2. useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.
3. If your app is like this site, and most interactions are coarse (like replacing a page or an entire section), memoization is usually unnecessary. On the other hand, if your app is more like a drawing editor, and most interactions are granular (like moving shapes), then you might find memoization very helpful.
4. When a component visually wraps other components, let it accept JSX as children. This way, when the wrapper component updates its own state, React knows that its children don’t need to re-render.

# Disadavntage
The downside of this approach is that code becomes less readable. Also, not all memoization is effective: a single value that’s “always new” is enough to break memoization for an entire component.


# ------------------------------------------------------------------------------------------------------
# memo 
lets you skip re-rendering a component when its props are unchanged.
`const MemoizedComponent = memo(SomeComponent, arePropsEqual?)`