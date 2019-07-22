import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';


class MainPage extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  filteredRobots=() => {
    const { searchField, robots } = this.props;
    return robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  }

  render() {
    const { isPending, error } = this.props;
    const { searchField, onSearchChange } = this.props;
    // eslint-disable-next-line max-len
    return isPending
      ? <h1>Loading</h1>
      : (
        <>
          <Container>
            <Row>
              <Col className="text-center">
                <h1 className="f1"> RoboFriends</h1>
              </Col>
            </Row>

            <SearchBox name="searchField" labelText="Search Robots" searchField={searchField} onChange={onSearchChange} />

          </Container>
          {error ? (<h2>{error}</h2>)
            : (
              <Scroll>
                <ErrorBoundary>
                  <Container fluid="true">
                    <CardList robots={this.filteredRobots()} />
                  </Container>
                </ErrorBoundary>
              </Scroll>
            )
          }
        </>
      );
  }
}
MainPage.defaultProps = {
  searchField: '',
  isPending: true,
  robots: [],
  error: '',
};
MainPage.propTypes = {
  searchField: PropTypes.string,
  error: PropTypes.string,
  isPending: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
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
        lat: PropTypes.string,
        lng: PropTypes.string,
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

export default MainPage;
