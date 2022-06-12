// Write your code here

import './index.css'

const CommentItem = props => {
  const {name, comment} = props
  const initial = name.slice(0, 1)

  return (
    <li className="comments-items-container">
      <div className="comment-user-details">
        <div className="first-letter">{initial}</div>
        <div className="comment-user-details-container">
          <h1 className="comment-user-name">{name}</h1>
          <p className="comment-date">less than a minute</p>
          <p className="user-comment"> {comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="like-image"
          />
          <p> Like </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </div>
    </li>
  )
}
export default CommentItem
