import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificatonReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificatonReducer,
  filtered: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

console.log(store.getState())

export default store