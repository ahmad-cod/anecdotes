import React from 'react';
import { connect } from 'react-redux';
import Anecdote from './Anecdote';

const AnecdoteList = ({ vote, anecdotes, filteredAnecdotes }) => {
  if (filteredAnecdotes.length) {
    return (
      filteredAnecdotes.sort((a, b) => b.votes - a.votes)
        .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} />
          )
    )
  }
  return (
    <>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filteredAnecdotes: state.filtered
  }
}

export default connect(mapStateToProps)(AnecdoteList)