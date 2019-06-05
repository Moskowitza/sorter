import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
import './App.css';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});
const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => {
    const { value } = event.target;
    dispatch(setSearchField(value));
  },
  onRequestRobots: () => {
    requestRobots(dispatch);
  },
});

class App extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  render() {
    const { robots, isPending, error } = this.props;
    const { searchField, onSearchChange } = this.props;
    // eslint-disable-next-line max-len
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return !isPending
      ? <h1>Loading</h1>
      : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox name="searchField" labelText="Search" searchField={searchField} onChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}
App.defaultProps = {
  searchField: '',
  isPending: true,
  robots: [],
  error: '',
};
App.propTypes = {
  searchField: PropTypes.string,
  error: PropTypes.string,
  isPending: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  robots: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
