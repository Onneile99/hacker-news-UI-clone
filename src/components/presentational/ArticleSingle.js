import React from 'react';
import PropTypes from 'prop-types';

const ArticleSingle = ({match}) => (
  <div>
    {match.params.article_id}
  </div>
);

ArticleSingle.propTypes = {
  match: PropTypes.object.isRequired
};

export default ArticleSingle;
