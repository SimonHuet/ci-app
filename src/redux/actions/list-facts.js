export const CLEAR = 'formation/listFacts/CLEAR'
export const FETCH_FACTS = 'formation/listFacts/FETCH_FACTS'
export const FACTS_FETCHED = 'formation/listFacts/FACTS_FETCHED'
export const FACT_FETCH_ERROR = 'formation/listFacts/FACTS_FETCH_ERROR'

export const fetchFacts = () => ({
  type: FETCH_FACTS,
})

export const factsFetched = facts => ({
  type: FACTS_FETCHED,
  facts,
})

export const factFetchError = () => ({
  type: FACT_FETCH_ERROR,
})

export const clear = () => ({
  type: CLEAR,
})
