import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, votes, id }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <p>Upvotes:</p>
          {votes}
        </div>
        <div className="media-content">
          {/* <Link> */}
            <div className="content">
              <h3 className="title is-3"><Link to={`/topics/${id}`}>{title}</Link></h3>
            </div>
          {/* </Link> */}
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default ArticleCard;
