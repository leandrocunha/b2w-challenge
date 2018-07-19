import React, { Component } from 'react';

export default class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { url } = this.props;

    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({ loading: false, data: { ...data } })
      );
  }

  render() {
    const { data, loading } = this.state;
    return <li>{loading ? 'Loading...' : data.title}</li>;
  }
}
