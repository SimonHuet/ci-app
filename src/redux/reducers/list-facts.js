import {
  FETCH_FACTS,
  FACTS_FETCHED,
  FACT_FETCH_ERROR,
  CLEAR,
} from '../actions/list-facts';

export const INITIAL_STATE = {
  facts: [],
  isFetchedFacts: false,
  isFetchError: false,
}

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
  oldSate = oldSate || INITIAL_STATE
  action = action || {}

  switch (action.type) {
    case CLEAR:
      return INITIAL_STATE
    case FETCH_FACTS:
      return {
        ...oldSate,
        isFetchedFacts: true,
      }
    case FACTS_FETCHED:
      return {
        ...oldSate,
        facts: action.facts,
        isFetchedFacts: false,
      }
    case FACT_FETCH_ERROR:
      return {
        ...oldSate,
        isFetchedFacts: false,
        isFetchError: true,
      }
    default:
      return oldSate;
  }
}
