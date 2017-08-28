import React from 'react';
import PropTypes from 'prop-types';

const TopicsItem = function (props) {
    return (
        <a>{props.slug}</a>
    );
};

TopicsItem.propTypes = {
    slug: PropTypes.string.isRequired,
};

export default TopicsItem;
