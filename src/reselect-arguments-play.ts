import { createSelector } from 'reselect';
import { StateRoot, StationDictionary, state } from './data';

// Factory selectors for static arguments (defined only once)
const selectStation = (stationId: string) => createSelector(
  (state: StateRoot) => state.stations,
  (stations: StationDictionary) => stations[stationId]
);

console.log(selectStation('foo')(state));

// Curried combiner for dynamic arguments
const selectStation2 = createSelector(
  (state: StateRoot) => state.stations,
  (stations: StationDictionary) => (stationId: string) => stations[stationId]
);

console.log(selectStation2(state)('foo'));
