import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({title, votes}) => {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{title}</h3>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default ArticleCard;
