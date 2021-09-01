import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { upvote, createAnecdote, initialAnecdotes } from './reducers/anecdoteReducer'
import { setNotification } from './reducers/notificationReducer'

const App = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialAnecdotes())
  }, [dispatch])
  const anecdotes = props.anecdotes
  const filteredAnecdotes = props.filtered

  const vote = (id, content) => {
    console.log('vote', id)

    props.upvote(id)
    props.setNotification(`You voted "${content}"`, 3)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter anecdotes={anecdotes} />
      <AnecdoteList vote={vote} filtered={filteredAnecdotes} anecdotes={anecdotes} />
      <AnecdoteForm />
    </div>
  )
}

const mapStateToProps = state => {
  const { anecdotes, filtered } = state
  return {
    anecdotes,
    filtered,
    // notification
  }
}

const mapDispatchToProps = {
  initialAnecdotes,
  upvote,
  setNotification,
  createAnecdote
}

export default connect(mapStateToProps, mapDispatchToProps)(App)