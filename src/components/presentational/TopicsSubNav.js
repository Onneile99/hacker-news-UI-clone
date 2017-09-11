import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopicsFilterLink from './TopicsFilterLink';

const TopicsSubNav = ({ topics, onTopicClick }) => (
  <div>
    <nav className="panel">
      <div className="panel-tabs">
        {topics.map(topic => (
          console.log(topic),
          <TopicsFilterLink
            topic_name={topic.slug}
            key={topic._id}
            onClick={() => onTopicClick(topic.slug)}
          />
        ))}
      </div>
    </nav>
  </div>
);

TopicsSubNav.propTypes = {
  topics: PropTypes.array.isRequired,
  onTopicClick: PropTypes.func.isRequired
};

export default TopicsSubNav;
