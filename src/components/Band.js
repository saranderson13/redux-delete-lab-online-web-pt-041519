// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         <li key={this.props.band.id}>{this.props.band.bandName} <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button></li>
//       </div>
//     );
//   }
// };

// export default Band;





// AS FUNCTIONAL COMPONENT

import React from 'react'

const Band = props => {
  return (
    <div>
      <li key={props.band.id}>{props.band.name} <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button></li>
    </div>
  )
}

export default Band;