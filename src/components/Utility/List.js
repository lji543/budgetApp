import React from 'react';

// import ListItem from './ListItem';
// import ListHeader from './ListHeader';

export class List extends React.Component{

  // constructor(props) {
  //   super(props);
  //
  // }


  generateList = () => {
    const { listItems } = this.props;

    // TODO need a more specific index if these lists are going to be changed by input
    return (
      listItems.map((items,idx) => {
        return (
          <div className="list-row" key={idx}>
            {items.map((item,idx) => {
              // TODO turn this into a table
              return <span className="list-row_item" key={idx}>{item}</span>
            })}
          </div>
        )
      })
    )
  }

  render() {

    return (
      <div className="list-container">
        {this.generateList()}
      </div>
    );
  }

}

export default List;
