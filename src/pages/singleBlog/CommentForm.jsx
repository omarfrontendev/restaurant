import React, { useState } from 'react'
import Button from '../../UI/button/Button'

const CommentForm = ({ setComments }) => {

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const submitFormHandler = event => {
    event.preventDefault();
    setComments(prev => [
      ...prev,
      {
        id: Math.random(),
        name,
        comment,
      }
    ])
  }

  return (
    <form onSubmit={submitFormHandler} className='form__comment'>
      <h3 className='text-gold'>Leave Your Feedback :</h3>
      <div className="flex column-start">
        <label htmlFor="name" className='text-gold'>Name :</label>
        <input type="text" placeholder='Type your name' onChange={e => setName(e.target.value)} id='name' />
      </div>
      <div className="flex column-start">
        <label htmlFor="comment" className='text-gold'>Comment :</label>
        <textarea type="text" placeholder='Type your comment' onChange={e => setComment(e.target.value)} id='comment' />
      </div>
      <Button type='submit' disabled={!name || !comment}>Post Comment</Button>
    </form>
  )
}

export default CommentForm