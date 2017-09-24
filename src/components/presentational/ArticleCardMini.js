import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCardMini = ({ title, votes, id, created_by }) => {
  return (
    <div className="container is-fluid">
      <div className="message-body">
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
              <div className="title is-5">
                <Link to={`/articles/${id}`}>{title}</Link>
              </div>
              <div className="subtitle is-7">submitted by {created_by}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

ArticleCardMini.propTypes = {
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default ArticleCardMini;
