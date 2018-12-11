import React from 'react';

import DataCalculations from './DataCalculations';
import List from './Utility/List';
import ListHeader from './Utility/ListHeader';

export class ContactList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      participants: this.props.participants,
    }
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
      return ([
        `${p.firstName} ${p.lastName}`,
        p.initialWeight,
        p.currentWeight,
        p.totalLost,
        `${p.percentLost} %`,
        p.goalWeight,
        p.leftToLose,
        `${p.goalPercent} %`
      ])
    })
  }

  componentDidMount() {
    this.getNewCalculations();
  }

  render() {

    return (
      <div className="">
        <ListHeader
          headerTitles={this.props.headerTitles}
        />
        <List className=""
          listItems={this.listItems()}
        />
      </div>
    );
  }

}

export default ContactList;
