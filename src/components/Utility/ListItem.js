import React from 'react';

export class ListItem extends React.Component{

  // constructor(props) {
    // super(props);
    // console.log(props)
  // }

  render() {
    const info = Object.values(this.props);

    return (
      <div className="list_item">
        {info.map((item,idx) => {
          return <span key={idx}>{item}</span>
        })}
      </div>
    );
  }

}

export default ListItem;
