import { createSelector as crapyCreateSelector } from './reselect-1';
import { createSelector } from 'reselect';
import { StateRoot, state } from './data';

// Check "selectStation" signature (cmd + hover) --> Oh crap 
const crapySelectStation = crapyCreateSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id, stations) => stations[id]
);

// Type any inferred
const station = crapySelectStation(state);
console.log(station);

// --------------------------------------------------------------------------------

// With proper types
const selectStation = createSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id, stations) => stations[id]
);

/**
 * combiner: (res1: string, res2: {[key: string]: Station}) => Station
 */

// Type Station inferred
const station2 = selectStation(state);
console.log(station2);
