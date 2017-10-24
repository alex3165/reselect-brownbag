export function mapStateToProps(state) {
  return {
    incompleteItems: Object.keys(state.items).filter((id) => !state.items[id].completed)
  }
}

// There are a couple problems with this approach as the application grows.

// The implementation of incompleteItems may change.
// Computation logic occurs in mapStateToProps
// Can't memoize the values of incompleteItems2

const getIncompleteItems = (state) => {
  return Object.keys(state.items).filter((id) => !state.items[id].completed);
}

export function mapStateToProps2(state) {
  return {
    incompleteItems: getIncompleteItems(state)
  }
}

// Reusable by composition
// Could be memoize
