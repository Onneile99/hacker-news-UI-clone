import React from 'react';
import PropTypes from 'prop-types';

// Components
import TopicsFilterLink from './TopicsFilterLink';

const TopicsSubNav = ({ topics, onTopicClick, onAllClick }) => (
  <div className="tabs is-left">
      <ul className="is-size-7">
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
        </ul>
  </div>
);

TopicsSubNav.propTypes = {
  topics: PropTypes.array.isRequired,
  onTopicClick: PropTypes.func.isRequired,
  onAllClick: PropTypes.func.isRequired
};

export default TopicsSubNav;
