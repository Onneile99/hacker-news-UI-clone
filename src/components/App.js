import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div>
        <h3 className='title is-3'>All Articles</h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
