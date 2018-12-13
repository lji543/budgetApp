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

  constructor() {
    super()

    this.state = {
      participants: Profiles
    }
  }

  addNewParticipant = participant => {
    Profiles.push(participant);
    this.setState(prevState => {
      return {participants: Profiles}
    })
  }

  render() {
    return (
      <>
      <div className="App-body">
        <Participants
          participants={this.state.participants}
          headerTitles={headerTitles}
        />
      </div>
      <AddParticipant addNewParticipant={this.addNewParticipant} />
      </>
    );
  }
}

export default App;
