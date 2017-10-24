// Reselect with memoize
export const createSelector = (...fns: Function[]) => {
  let cachedResults: any[] = [];
  let cachedCombinerResult;

  return (state: any) => {
    const immutableFns = [...fns];

    const combiner = immutableFns.pop();
    const results = immutableFns.map((fn) => fn(state));

    const areResultsEquals = results  
      // 1: Shallow reference equality over the results of the functions
      .map((res, index) => res === cachedResults[index])
      .filter(Boolean).length === immutableFns.length;
    
    // 2: If all the functions don't break reference equality we return the cached value of the combiner
    if (areResultsEquals) {
      return cachedCombinerResult;
    }

    cachedResults = results;
    if (combiner) {
      // 3: Cache the combiner for next iteration if being processed
      cachedCombinerResult = combiner(...results);
      return cachedCombinerResult;
    }

    return undefined;
  }
};
