import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicsItem = ({slug}) => {
    return (
        <Link to={`/topics/${slug}`} activeClassName="active">{slug}</Link>
    );
};

TopicsItem.propTypes = {
    slug: PropTypes.string.isRequired,
};

export default TopicsItem;
