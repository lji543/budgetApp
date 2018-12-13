import React from 'react';

// import ListItem from './ListItem';
import ListHeader from './ListHeader';

export default class List extends React.Component{

  // constructor(props) {
  //   super(props);
  //
  // }

  handleEdit = (prop,id) => e => {
    this.props.updateData(e,prop,id);
  }

  handleClick = id => e => {
    this.props.changeEditingState(e,id);
  }

  generateList = () => {
    let listItems = Object.values(this.props.listItems)

    // TODO add a more specific index if these lists are going to be changed by input
    return (
      listItems.map((obj,idx) => {
        let values = Object.values(obj);
        // TODO move this / cleanup
        let editable = ["name", "currentWeight", "goalWeight"];

        return (
          <tr className="list-row" key={obj.id}>

            {values.map((val,k) => {

              if (obj.isEditing && (editable.indexOf(Object.keys(obj)[k])!== -1 )) {
                return (
                  <td className="list-row_item" key={k}>
                    <input placeholder={val.toString()} onChange={this.handleEdit(Object.keys(obj)[k],obj.id)}/>
                  </td>
                )
              }

              return <td className="list-row_item" key={k}>{val}</td>
            })}

            <td className="list-row_item"><button onClick={this.handleClick(obj.id)}>{(obj.isEditing)? "Done" : "Edit"}</button></td>
          </tr>
        )
      })
    )
  }

  render() {

    return (
      <table className="list-container">
        <tbody>
          <ListHeader headerTitles={this.props.headerTitles} />
          {this.generateList()}
        </tbody>
      </table>
    );
  }

};
