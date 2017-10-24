import { createSelector } from './reselect-1';
import { StationDictionary, StateRoot, Station, LocationDictionary, state } from './data';

// Compose selectors
const selectStation = createSelector(
  (state: StateRoot) => state.stationId,
  (state: StateRoot) => state.stations,
  (id: string, stations: StationDictionary) => stations[id]
);

const selectLocationForStation = createSelector(
  selectStation,
  (state: StateRoot) => state.locations,
  (station: Station, locations: LocationDictionary) => {
    return station.locationId ? locations[station.locationId] : undefined;
  }
);

const location = selectLocationForStation(state);

console.log(location);
