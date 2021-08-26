import React from 'react';
import Anecdote from './Anecdote';

const AnecdoteList = ({ vote, anecdotes, filtered }) => {
  if(filtered.length){
    return (
      filtered.sort((a, b) => b.votes - a.votes)
              .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />)
    )
  }
  return (
    <>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
        )}
    </>
  )
}

export default AnecdoteList