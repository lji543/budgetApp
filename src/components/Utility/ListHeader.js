import React from 'react';

export class ListHeader extends React.Component{

  // constructor(props) {
    // super(props);
    // console.log(props)
  // }

  render() {
    return (
      <div className="list-header">
        {this.props.headerTitles.map((item,idx) => {
          return <span className="list-header-item" key={idx}>{item}</span>
        })}
      </div>
    );
  }

}

export default ListHeader;
