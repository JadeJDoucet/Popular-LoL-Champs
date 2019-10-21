import React from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems()
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getItems() {
    return axios.get('/matches') // change to /matches
      .then(response => response.data);
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <List items={items} />
      </div>
    );
  }
}

export default App;
