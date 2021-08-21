import React from 'react';

const AnecdoteForm = ({ addAnecdote }) => {
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content'/></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm