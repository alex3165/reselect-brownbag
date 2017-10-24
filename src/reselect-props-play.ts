import { createSelector } from './reselect-props';
import { StateRoot, StationDictionary, state } from './data';

interface Props {
  stationId: string;
}

const selectStation = createSelector(
  // 1: First accessor function take stationId from props
  (_: StateRoot, props: Props) => props.stationId,  
  (state: StateRoot) => state.stations,
  // 2: We get id from props and stations from state
  (id: string, stations: StationDictionary) => stations[id]
);

// 3: We pass the props as a second parameter of selectStation selector
const res = selectStation(state, { stationId: 'foo' });

console.log(res);
