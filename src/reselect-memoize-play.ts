import { state, StationDictionary, StateRoot } from './data';
import { createSelector } from 'reselect';

// Compose selectors
const selectStation = createSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id: string, stations: StationDictionary) => {
    console.log('Run combiner');
    return stations[id]
  }
);

const res1 = selectStation(state);
const res2 = selectStation(state);
const res3 = selectStation({ ...state, stationId: 'hello' });

console.log('Results: ', res1, res2, res3);
