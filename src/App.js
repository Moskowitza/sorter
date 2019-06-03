import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import MouseTracker from './components/MouseTracker';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends Component {
    state = {
      robots: [],
      searchField: '',
    };

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

  onSearchChange=(event) => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return !robots.length
      ? <h1>Loading</h1>
      : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox name="searchField" labelText="Search" searchField={searchField} onChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>

        </div>
      );

  }
}

export default App;
