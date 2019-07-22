import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

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
    dispatch(requestRobots()); // using redux thunk
  },
});

const App = props => <MainPage {...props} />;


export default connect(mapStateToProps, mapDispatchToProps)(App);
