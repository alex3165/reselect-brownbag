
// 1: The curried function of createSelector accept some props as a second parameter
export const createSelector = (...fns: Function[]) => (state: any, props: any) => {
  const immutableFns = [...fns];

  const combiner = immutableFns.pop();

  // 2: We apply those props along with the state to every accessor function being called
  const args = immutableFns.map((fn) => fn(state, props));

  return combiner ? combiner(...args) : undefined;
};
