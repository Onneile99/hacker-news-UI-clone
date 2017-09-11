import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicsFilterLink = props => (
    console.log(props),
  <Link
    to={
      props.topic_name === 'all' ? '/' : `/topics/${props.topic_name}/articles`
    }
  >
    {props.topic_name}
  </Link>
);

TopicsFilterLink.propTypes = {
  topic_name: PropTypes.string.isRequired
};

export default TopicsFilterLink;
