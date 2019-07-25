import React, { useState } from 'react';

const CommentInput = props => {

  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const comment = text;
    const coffeeId = props.coffeeId;
    props.addComment(comment, coffeeId);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea rows="2" cols="20" type="textarea" value={text} onChange={handleChange} placeholder="add comment" />
        <input className="form-submit-button" type="submit" value="add" />
      </form>
    </div>
  )
}


export default CommentInput;
