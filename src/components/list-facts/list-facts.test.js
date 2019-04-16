import * as assert from 'assert';
import { reducer, INITIAL_STATE } from '../../../src/redux/reducers/list-facts';
import {
  fetchFacts,
  factsFetched,
  factFetchError,
} from '../../../src/redux/actions/list-facts';

describe('ChuckNorris app reducer', () => {
  it('should never fail and return the old state by default', () => {
    // a reducer called w/o args should return the INITIAL_STATE
    assert.equal(reducer(), INITIAL_STATE);

    // a reducer called with a state should return it when no action is given
    assert.equal(reducer(INITIAL_STATE), INITIAL_STATE);

    // a reducer called with an unkown action type should return the INITIAL_STATE
    assert.equal(reducer(null, {type: 'pikachu'}), INITIAL_STATE);
  })

  it('should reduce FACTS_FETCHED action', () => {
    const state1 = reducer()

    assert.equal(state1.isFetchedFacts, false)

    const state2 = reducer(state1, fetchFacts());

    assert.equal(state2.isFetchedFacts, true)
  })

  it('should reduce FETCH_Facts action', () => {
    const state1 = reducer(null, factsFetched([
      { title: 'test fact 1'},
      { title: 'test fact 2'},
    ]))

    assert.equal(state1.facts.length, 2)
    assert.equal(state1.isFetchedFacts, false)
  })

  it('should reduce FACT_FETCH_ERROR action', () => {
    const state1 = reducer()

    assert.equal(state1.isFetchedFacts, false)
    assert.equal(state1.isFetchError, false)


    const state2 = reducer(state1, factFetchError());
    assert.equal(state2.isFetchedFacts, false)
    assert.equal(state2.isFetchError, true)
  })
})
