import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/comments/Comments.js';
import CommentInput from '../components/comments/CommentInput.js';
import { deleteComment, addComment } from '../actions/commentActions.js'

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <CommentInput addComment={this.props.addComment} coffeeId={this.props.coffeeId} />
        <Comments comments={this.props.comments} deleteComment={this.props.deleteComment} />
      </div>
    );
  }
};

export default connect(null, { deleteComment, addComment })(CommentsContainer);
