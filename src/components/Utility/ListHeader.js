import React from 'react';

class ListHeader extends React.Component{

  // constructor(props) {
    // super(props);
    // console.log(props)
  // }

  render() {
    return (
      <tr className="list-header">
        {this.props.headerTitles.map((item,idx) => {
          return <td className="list-header-item" key={idx}>{item}</td>
        })}
      </tr>
    );
  }

}

export default ListHeader;
