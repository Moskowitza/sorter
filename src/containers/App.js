import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';
import './App.css';

const mapStateToProps = state => ({
  searchField: state.searchField,
});
const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => {
    const { value } = event.target;
    dispatch(setSearchField(value));
  },
});

class App extends Component {
    state = {
      robots: [],
      // searchField: '',
    };

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    // onSearchChange=(event) => {
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value,
    //   });
    // }

    render() {
      const { robots } = this.state;
      const { searchField, onSearchChange } = this.props;
      // eslint-disable-next-line max-len
      const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
      return !robots.length
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
};
App.propTypes = {
  searchField: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
