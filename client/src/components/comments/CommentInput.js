import React, { useState } from 'react';

const CommentInput = props => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea rows="2" cols="20" type="textarea" value={text} onChange={handleChange} placeholder="add comment" />
        <input type="submit" value="add" />
      </form>
    </div>
  )
}


export default CommentInput;
