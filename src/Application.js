import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('auth changed', currentUser);
      this.setState({ currentUser });
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          { /* alternative to a ternary, single version! */ } 
          { !currentUser && <SignIn /> }
          { currentUser && <CurrentUser user={currentUser} /> }
        </div>
      </div>
    );
  }
}

export default Application;
