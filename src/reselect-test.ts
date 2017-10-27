import { createSelector } from 'reselect';
import { StateRoot, StationDictionary, state } from './data';

const selectStation = createSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id: string, stations: StationDictionary) => stations[id]
);

describe('test reselect selector', () => {
  it('Should return a predictable combiner result given it\'s arguments', () => {

    // Take the combiner and compute it given a set of dummy data
    // it should return a predictable result
    expect(selectStation.resultFunc(state.stationId, state.stations)).toEqual({
      name: 'London st pancras',
      locationId: 'aLocationId'
    });

  });  
});

// Possibility to snapshot test combiner maybe?
