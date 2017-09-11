import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopicsFilterLink from './TopicsFilterLink';

const TopicsSubNav = ({ topics, onTopicClick, onAllClick }) => (
  <div>
    <nav className="panel">
      <div className="panel-tabs">
        <TopicsFilterLink
          topic_name={'all'}
          key={'all'}
          onClick={() => onAllClick()}
        />
        {topics.map(topic => (
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
  onTopicClick: PropTypes.func.isRequired,
  onAllClick: PropTypes.func.isRequired
};

export default TopicsSubNav;
