// Lean implementation of reselect, createSelector without memoize and props

/*
*  Note: The functions must not contain any logic they should just access a part of your state
*  it should be as atomic as possible.
*/

// 1: Take an infinite number of functions and return a function that take a state
export const createSelector = (...fns: Function[]) => (state: any) => {
  const immutableFns = [...fns];

  // 2: the last function is the combiner
  const combiner = immutableFns.pop();

  // 3: Run all the accessors
  const args = immutableFns.map((fn) => fn(state));

  // 4: Compute the combiner with the results of each accessors passed as argument
  return combiner ? combiner(...args) : undefined;
};
