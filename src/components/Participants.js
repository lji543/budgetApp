import React from 'react';

import DataCalculations from './DataCalculations';
import List from './Utility/List';

export class Participants extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      participants: this.props.participants,
      listItems: {}
    }
  }

  // TODO should this be moved to App?
  addDataProperties = () => {
    // TODO double check the use of state, then setting w/ prevState
    this.state.participants.map((participant,idx) => {
      if (participant.initialWeight===0){
        participant.initialWeight = participant.currentWeight;
      }
      participant.isEditing = false;
      participant.id = idx;
      return participant;
    })
    this.setState(prevState => {
      return {participants:prevState.participants}
    })
  }

  // TODO combine this and updateData somehow
  changeEditingState = (e,id) => {
    const {listItems} = this.state;

    listItems.map(participant => {
      if (participant.id === id) {
        return participant.isEditing = !participant.isEditing
      }
      return participant.isEditing;
    })

    this.setState({listItems:listItems})
  }

  updateData = (e,prop,id) => {
    this.state.listItems.map(p => {
      if (p.id === id) {
        return p[prop] = e.target.value;
      }
      // TODO is map the best thing to use here? need to return value,
      // but dont need to iterate through everything
      return p;
    })

    // TODO should probably set state here? but also handled by getNewCalculations...
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
    let listItems = this.state.participants.map((p,idx) => {
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
    this.setState(prevState => {
      return {listItems:listItems}
    })
  }

  componentDidMount() {
    this.addDataProperties();
    this.getNewCalculations();
    this.listItems();
  }

  componentWillReceiveProps() {
    // TODO already received new props (ie nextProps is the same as the current),
    // so is this really the best place? should we move the calculations, etc somewhere else?
    // or at a different point in the lifecycle?
    this.addDataProperties();
    this.getNewCalculations();
    this.listItems();
  }

  render() {
    return (
      <div className="">
        <List className=""
          isEditing={this.state.isEditing}
          updateData={this.updateData}
          changeEditingState={this.changeEditingState}
          headerTitles={this.props.headerTitles}
          listItems={this.state.listItems}
        />
      </div>
    );
  }

}

export default Participants;
