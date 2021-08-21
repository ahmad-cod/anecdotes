import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { upvote, newAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    dispatch(upvote(id))
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
      <AnecdoteList vote={vote} anecdotes={anecdotes} />
      <AnecdoteForm addAnecdote={addAnecdote}/>
    </div>
  )
}

export default App