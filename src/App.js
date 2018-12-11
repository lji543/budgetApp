import React, { Component } from 'react';

import Participants from './components/Participants';
import Profiles from './components/Profiles';

import './scss/App.scss';

const headerTitles = [
  " ",
  "Starting",
  "Current",
  "Lbs Lost",
  "% Lost",
  "Goal",
  "Left to Lose",
  "Target %"
]

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Participants
          participants={Profiles}
          headerTitles={headerTitles}
        />
      </div>
    );
  }
}

export default App;
