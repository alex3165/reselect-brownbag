import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';
import { StateRoot, StationDictionary, state } from './data';


// You most likely will never need this: deep equality is expensive
const customCreateSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

const selectStation = customCreateSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id: string, stations: StationDictionary) => stations[id]
);

const res = selectStation(state);

console.log(res);
