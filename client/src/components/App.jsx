/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      items: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.getItems = this.getItems.bind(this);
    this.addUsername = this.addUsername.bind(this); // bound here
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
    return axios.get('/champions')
      .then(response => response.data);
  }

  stateSetter() {
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

  addUsername() {
    const { username } = this.state;
    return axios.post('/matches', { username })
      .then(() => {
        console.log(`${username} sent to server!`);
      })
      .then(() => {
        this.stateSetter(); // update list to render changes
      })
      .catch((err) => { console.error(err); });
  }

  submitHandler(event) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    const { items, username } = this.state;
    return (
      <div>
        <h1>LoL Top Picks</h1>
        <input type="text" value={username} onChange={this.submitHandler} />
        <button type="submit" onClick={this.addUsername}> Add Username </button>
        <h1>Item List </h1>
        <List items={items} />
      </div>
    );
  }
}

export default App;
