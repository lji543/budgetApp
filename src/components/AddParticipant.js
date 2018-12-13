import React from 'react';

// import ListItem from './ListItem';
// import ListHeader from './ListHeader';

class AddParticipant extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      template: this.buttonTemplate,
      newParticipant: {
        firstName: "",
        lastName: "",
        currentWeight: 0,
        initialWeight: 0,
        goalWeight: 0
      }
    }
  }

  handleClick = () => {
    this.setTemplate();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ newParticipant: { ...this.state.newParticipant, [name]: value} });
  }

  // TODO repeat through these / combine with list items to make a new component
  // and/or put this somewhere else?
  formTemplate = () => {
    // TODO probably should update to form element or something?
    return (
      <div>
        First Name<input name="firstName" onChange={this.handleChange} />
        Last Name<input name="lastName" onChange={this.handleChange} />
        Current Weight<input name="currentWeight" onChange={this.handleChange} />
        Goal Weight<input name="goalWeight" onChange={this.handleChange} />
        <button onClick={() => {this.handleClick(); this.props.addNewParticipant(this.state.newParticipant)}}>Submit</button>
      </div>
    )
  }

  buttonTemplate = <button onClick={this.handleClick}>Add Participant</button>;

  setTemplate = () => {
    let template, isEditing = !this.state.isEditing;

    if (isEditing) {
      template = this.formTemplate();
    } else {
      template = this.buttonTemplate;
    }

    this.setState({template:template, isEditing:isEditing});
  }

  render() {

    return (
      <div>{this.state.template}</div>
    );
  }

}

export default AddParticipant;
