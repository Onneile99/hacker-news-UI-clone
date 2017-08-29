import React from 'react';
import PropTypes from 'prop-types';

const TopicsItem = ({slug}) => {
    return (
        <a>{slug}</a>
    );
};

TopicsItem.propTypes = {
    slug: PropTypes.string.isRequired,
};

export default TopicsItem;
