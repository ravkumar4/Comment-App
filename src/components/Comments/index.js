import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const commentUsername = [
  {
    id: uuidv4(),
    name: 'ravi',
    comment: 'great learning',
  },
  {
    id: uuidv4(),
    name: 'raju',
    comment: 'it was nice interacting with you',
  },
]
// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentCount: 0,
  }

  render() {
    return (
      <fragment>
        <div className="app-container">
          <div className="comment-container">
            <div className="comments-enter-container">
              <h1 className="heading">Comments</h1>
              <p className="desc">Say something about 4.O Technologies</p>
              <form
                className="comment-user-form"
                onSubmit="onSubmitCommentForm"
              >
                <input
                  onChange={this.onChangeName}
                  className="username"
                  placeholder="Your Name"
                  type="search"
                />
                <textarea
                  className="comment"
                  placeholder="Your Comment"
                  rows="5"
                  cols="50"
                ></textarea>
                <button className="button" type="button">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="comment-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-image"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="username-comment-container">
            <p className="comment-count-number"> 0 </p>
            <p className="comment-count-text"> Comments</p>
          </div>
        </div>
      </fragment>
    )
  }
}
export default Comments
