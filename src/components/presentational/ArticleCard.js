import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, votes, id, created_by }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <div className="tile is-ancestor">
            <div className="tile is-1 is-vertical">
              <div className="tile">
                <i className="fa fa-chevron-up" aria-hidden="true" />
              </div>
              <div className="tile">{votes}</div>
              <div className="tile">
                <i className="fa fa-chevron-down" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">
              <Link to={`/articles/${id}`}>{title}</Link>
            </h3>
            <p>submitted by {created_by}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default ArticleCard;
