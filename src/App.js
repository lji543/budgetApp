import React, { Component } from 'react';

import AddParticipant from './components/AddParticipant';
import Participants from './components/Participants';
import Profiles from './components/Profiles';

import './scss/App.scss';

const headerTitles = [
  "",
  "Starting",
  "Current",
  "Lbs Lost",
  "% Lost",
  "Goal",
  "Left to Lose",
  "Target %"
]

class App extends Component {

  addNewParticipant = participant => {
    console.log(participant)
  }

  render() {
    return (
      <>
      <div className="App-body">
        <Participants
          participants={Profiles}
          headerTitles={headerTitles}
        />
      </div>
      <AddParticipant addNewParticipant={this.addNewParticipant} />
      </>
    );
  }
}

export default App;
