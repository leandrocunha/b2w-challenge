import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanet } from './../actions';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }
  componentDidMount() {
    this.get();
  }

  get() {
    const { dispatch } = this.props;
    const params = { id: Math.floor(Math.random() * 20) + 1 };
    dispatch(getPlanet(params));
  }

  next(e) {
    e.preventDefault();
    this.get();
  }

  render() {
    const { planet } = this.props;
    return (
      <section className="App">
        <div className="container">
          <div className="row align-items-center justify-content-sm-center">
            <div className="col col-sm-4">
              <Card next={this.next} {...planet} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ StarWars }) => ({
  planet: StarWars.planet,
});

export default connect(mapStateToProps)(App);
