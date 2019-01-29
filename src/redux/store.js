import { createStore, compose, applyMiddleware } from 'redux'
import { history } from '../history'
import { reducer } from './reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const logger = reducer => (state, action) => {
  const newState = reducer(state, action);

  console.log('=== NEW STATE ===');
  console.log(newState);

  return newState;
}

const rootReducer = connectRouter(history)(reducer)

export const store = createStore(
  'development' === process.env.REACT_APP_NODE_ENV
    ? logger(rootReducer)
    : rootReducer,
  rootReducer(),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  )
);
