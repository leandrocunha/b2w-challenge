import React, { Component } from 'react';
import Film from './../Film';
import './Card.css';

export default class Card extends Component {
  render() {
    const {
      climate,
      films,
      loading,
      name,
      next,
      population,
      terrain,
    } = this.props;
    return (
      <div className="card">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            <div className="card-header">
              <h1>{name}</h1>
            </div>
            <div className="card-body">
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Climate:</strong> {climate}
              </p>
              <p>
                <strong>Terrain:</strong> {terrain}
              </p>
              <p>Featured appear in:</p>
              <ul>
                {films.map((url, i) => <Film key={i} url={url} />)}
              </ul>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                onClick={e => next(e)}
              >
                Next Planet
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
