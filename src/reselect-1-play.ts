import { StationDictionary, StateRoot, state } from './data';
import { createSelector } from './reselect-1';

// Let's create a selector out of it
const selectStation = createSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id: string, stations: StationDictionary) => stations[id]
);

const res = selectStation(state);

console.log(res);
