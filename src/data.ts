export interface Station {
  name: string;
  locationId?: string;
}

export interface Location {
  city: string;
}

export type StationDictionary =  { [key: string]: Station };

export type LocationDictionary = { [key: string]: Location }

export interface StateRoot {
  stationId: string;
  stations: StationDictionary;
  locations?: LocationDictionary;
}

export const state: StateRoot = {
  stationId: 'foo',
  stations: {
    foo: {
      name: 'London st pancras',
      locationId: 'aLocationId'
    }
  },
  locations: {
    aLocationId: {
      city: 'London'
    }
  }
};
