
import { combineReducers } from 'redux'
import { reducer as listFacts } from './list-facts'

export const reducer = combineReducers({
  listFacts,
})
