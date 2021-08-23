import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { upvote, newAnecdote } from './reducers/anecdoteReducer'
import { addNotification, removeNotification } from './reducers/notificationReducer'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    dispatch(upvote(id))
    dispatch(addNotification('New Vote added'))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(newAnecdote(content))
    console.log(content)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList vote={vote} anecdotes={anecdotes} />
      <AnecdoteForm addAnecdote={addAnecdote}/>
    </div>
  )
}

export default App