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
      userExists: false,
      added: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.getItems = this.getItems.bind(this);
    this.addUsername = this.addUsername.bind(this);
    this.userExists = this.userExists.bind(this); // bind here
    this.userDoesntExist = this.userDoesntExist.bind(this);
    this.userAdded = this.userAdded.bind(this);
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

  userDoesntExist() {
    this.setState({
      userExists: false,
    });
  }

  userExists() {
  // if a user exists, render something to page?
  // set false value to true on state? set timeout to change it back
    this.setState({
      userExists: true, // set state to true, render something when this is true
    });
    setTimeout(() => {
      this.userDoesntExist();
    }, 1500); // set to two seconds to change state back
  }

  userAdded() {
    this.setState({
      added: true,
    });
    setTimeout(() => {
      this.setState({
        added: false,
      });
    }, 1500);
  }

  addUsername() {
    const { username } = this.state;
    return axios.post('/matches', { username })
      .then((response) => {
        // console.log(response);
        if (response.data === "User Exists") {
          this.userExists();
        } else {
          // this.setState({
          //   added: true,
          // });
          this.userAdded();
        }
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
    const { items, username, userExists, added } = this.state;
    let info;
    if (added) {
      info = <h2 id="added">User added! </h2>;
    } else if (userExists) {
      info = <h2 id="user-exist"> User exists!</h2>;
    } else {
      info = <h2></h2>;
    }
    return (
      <div>
        <h1 id="title">LoL Top Picks</h1>
        {info}
        <input type="text" value={username} onChange={this.submitHandler} />
        <button type="submit" onClick={this.addUsername}> Add Username </button>
        <List items={items} />
      </div>
    );
  }
}

export default App;
