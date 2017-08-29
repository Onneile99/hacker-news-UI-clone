import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopicsItem from './TopicsItem';

const TopicsSubNav = ({topics}) => {
    return (
        <div>
        <nav className="panel">
            <div className="panel-tabs">
                <a className="is-active">all</a>
                {topics.map(topic => <TopicsItem title={topic.title} slug={topic.slug} key={topic._id} />)}
            </div>
        </nav>
        </div>
    );
};

TopicsSubNav.propTypes = {
    topics: PropTypes.array.isRequired
};

export default TopicsSubNav;