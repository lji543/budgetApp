import React from 'react';

import DataCalculations from './DataCalculations';
import List from './Utility/List';
// import ListHeader from './Utility/ListHeader';

export class ContactList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      participants: this.props.participants,
    }
  }

  addDataProperties = () => {
    let participants = this.state.participants.map(participant => {
      return participant.isEditing = false;
    })
    this.setState(prevState => {
      return {participants:prevState.participants}
    })
  }

  changeEditingState = (e,id) => {
    const {participants} = this.state;

    participants.map(participant => {
      if (participant.id === id) {
        return participant.isEditing = !participant.isEditing
      }
      return participant.isEditing;
    })

    this.setState({participants:participants})
  }

  updateData = (e,prop,id) => {
    console.log(e.target.value,prop,id)

    this.state.participants.map(p => {
      if (p.id === id) {
        p[prop] = e.target.value;
      }
    })

    // TODO should probably set this here? but also handled by getNewCalculations...
    // this.setState({participants: participants})
    this.getNewCalculations();
  }

  getNewCalculations = () => {
    const {participants} = this.state;
    let data = new DataCalculations();

    participants.map(p => {
      return (
        p.totalLost = data.calculateTheDifference(p.initialWeight, p.currentWeight),
        p.leftToLose = data.calculateTheDifference(p.currentWeight, p.goalWeight),
        p.percentLost = data.calculatePercent(p.initialWeight, p.currentWeight),
        p.goalPercent = data.calculatePercent(p.initialWeight, p.goalWeight)
      )
    })

    this.setState({participants: participants})
  }

  listItems = () => {
    return this.state.participants.map((p,idx) => {
      // TODO dont really need to set this here? list is now unique
      return ({
        name: `${p.firstName} ${p.lastName}`,
        initialWeight: p.initialWeight,
        currentWeight: p.currentWeight,
        totalLost: p.totalLost,
        percentLost: `${p.percentLost} %`,
        goalWeight: p.goalWeight,
        leftToLose: p.leftToLose,
        goalpercent: `${p.goalPercent} %`,
        id: p.id,
        isEditing: p.isEditing
      })
    })
  }

  componentDidMount() {
    this.addDataProperties();
    this.getNewCalculations();
  }

  render() {

    return (
      <div className="">
        <List className=""
          isEditing={this.state.isEditing}
          updateData={this.updateData}
          changeEditingState={this.changeEditingState}
          headerTitles={this.props.headerTitles}
          listItems={this.listItems()}
        />
      </div>
    );
  }

}

export default ContactList;
