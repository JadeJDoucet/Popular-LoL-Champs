/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';

import List from './List.jsx';
import UserButton from './UserButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.getItems = this.getItems.bind(this);
    this.addUsername = this.addUsername.bind(this); //bound here
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
    return axios.get('/champions') // change to /matches
      .then(response => response.data);
  }

  addUsername(username) {
    return axios.post('/', { username })
      .then(() => {
        console.log(`${username} sent to server!`);
      })
      .then(() => {
        // this.componentDidMount();// update list and render again
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1> Add to our database!</h1>
        <UserButton onClick={this.addUsername} />
        <h1>Item List</h1>
        <List items={items} />
      </div>
    );
  }
}

export default App;
