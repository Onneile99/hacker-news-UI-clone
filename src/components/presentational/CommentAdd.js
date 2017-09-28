import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';


let CommentAdd = props => {
  const {handleSubmit, reset, article, addComment} = props;
  const submit = (values) => {
    addComment(article._id, values);
    reset();
  };
  return (
    <div className="media-content">
      <form onSubmit={handleSubmit(submit)}>
        <div className="field">
          <label htmlFor="body">add a new comment</label>
          <Field
            name="body"
            className="textarea"
            placeholder="I hereby comment..."
            component="textarea"
            type="text"
          />
        </div>
        <div className="field">
          <button className="button" type="submit">
            post
          </button>
        </div>
      </form>
    </div>
  );
};

CommentAdd.propTypes = {
  addComment: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

CommentAdd = reduxForm({
  form: 'addComment'
})(CommentAdd);

export default CommentAdd;
