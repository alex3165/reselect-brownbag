import { createSelector } from 'reselect';

interface StateRoot {
  entities: {
    journeySearches: { [hash: string]: any }
  }
}

interface JourneySearchSelectorParams {
  query: {
    // Parameters used as hash to predict a journeySearch
    outwardDate: string;
    inwardDate: string;

    // Parameters we don't want to include in the hash, selection don't help to identify a journey search
    outwardSelection: string;
  }
}

const mapResultsPageQueryToJourneySearchRequest = (query: any) => {
  // Strip out parameters that don't help to identify a journeySearch
  return {};
}

const hash = (params: any) => 'aPredictableHashFromUrl';

export const selectJourneySearches = createSelector(
  (state: StateRoot) => state.entities,
  (entities) => entities.journeySearches,
);

export const selectJourneySearchRequestFromQuery = createSelector(
  (_: StateRoot, props: JourneySearchSelectorParams) => props.query,
  query => mapResultsPageQueryToJourneySearchRequest(query)
);

export const selectLastJourneySearchParamsHash = createSelector(
  selectJourneySearchRequestFromQuery,
  journeySearchRequest => hash(journeySearchRequest)
);

export const selectLastJourneySearch = createSelector(
  selectJourneySearches,
  selectLastJourneySearchParamsHash,
  (journeySearches, lastSearchRequestHash) => journeySearches[lastSearchRequestHash]
);
