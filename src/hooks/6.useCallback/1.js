// You have a component <MyBigList> that renders a big list of items:

import useSearch from './fetch-items';

function MyBigList({ term, onItemClick }) {
  const items = useSearch(term);

  const map = item => <div onClick={onItemClick}>{item}</div>;

  return <div>{items.map(map)}</div>;
}

export default React.memo(MyBigList);
// The list could be big, maybe hundreds of items. To prevent useless list re-renderings, you wrap it into React.memo().

// The parent component of MyBigList provides a handler function to know when an item is clicked:

import { useCallback } from 'react';

export function MyParent({ term }) {
  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, [term]);

  return (
    <MyBigList
      term={term}
      onItemClick={onItemClick}
    />
  );
}
// onItemClick callback is memoized by useCallback(). As long as term is the same, useCallback() returns the same function object.

// When MyParent component re-renders, onItemClick function object remains the same and doesn't break the memoization of MyBigList.

// That was a good use case of useCallback().