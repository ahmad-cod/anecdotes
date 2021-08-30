import { getAll } from "../services/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  const { type, data } = action
  switch (type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE': {
      return [...state, data]
    }
    case 'INCREMENT_VOTE': {
      const id = data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange, 
        votes : anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
        )
    }
    default: 
      return state;
  }
}

export const upvote = (id) => {
  return {
    type: 'INCREMENT_VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}
export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
export default reducer