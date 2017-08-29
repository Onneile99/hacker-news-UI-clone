import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import TopicsItem from './TopicsItem';

const TopicsSubNav = ({topics}) => {
    return (
        <div>
        <nav className="panel">
            <div className="panel-tabs">
                <Link to={'/articles'} className="is-active">all</Link>
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