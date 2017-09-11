import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicsFilterLink = ({ topic_name, onClick }) => (
  <Link
    to={!topic_name ? '/' : `/topics/${topic_name}/articles`}
    onClick={onClick}
  >
    {topic_name}
  </Link>
);

TopicsFilterLink.propTypes = {
  topic_name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TopicsFilterLink;
