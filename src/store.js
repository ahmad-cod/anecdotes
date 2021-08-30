import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificatonReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificatonReducer,
  filtered: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

console.log(store.getState())

export default store