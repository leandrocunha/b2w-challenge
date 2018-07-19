import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanet } from './../actions';
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
    console.log(this.props);
    return (
      <section className="App">
        <div className="container">
          <div className="row align-items-center justify-content-sm-center">
            <div className="col col-sm-4">
              <div className="card">
                {planet.loading ? (
                  <p>Carregando...</p>
                ) : (
                  <div>
                    <div className="card-header">
                      <h1>{planet.name}</h1>
                    </div>
                    <div className="card-body">
                      <p>{`Population: ${planet.population}`}</p>
                      <p>{`Climate: ${planet.climate}`}</p>
                      <p>{`Terrain: ${planet.terrain}`}</p>
                      <p>Featured appear in:</p>
                      <ul>
                        {planet.films.map((movie, i) => (
                          <li key={i}>{movie}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-primary"
                        onClick={this.next}
                      >
                        Next Planet
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
