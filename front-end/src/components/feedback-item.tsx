import React from 'react'

export default function FeedbackItem({feedback, handleClick = ()=> {}}) {
  return (
    <div className="card w-100 bg-base-100 shadow-xl hover:scale-110" onClick={handleClick}>
    <div className="card-body">
      <h2 className="card-title">
       {feedback.title}
        {
            feedback.status === 'new' && (
                <div className="badge badge-secondary">{feedback.status}</div>
            )
        }
      </h2>
      <p>{feedback.description}</p>
<span>By User: {feedback.userId}</span>
    </div>
  </div>
  )
}
