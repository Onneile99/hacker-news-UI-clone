import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopicsFilterLink from './TopicsFilterLink';

const TopicsSubNav = ({ topics }) => (
  <div>
    <nav className="panel">
      <div className="panel-tabs">
        {topics.map(topic => <TopicsFilterLink topic_name={topic.slug} key={topic._id} />)}
      </div>
    </nav>
  </div>
);

TopicsSubNav.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicsSubNav;
