import React from 'react';

import OPTIONS_DATA from './../homepage/options.data.js';

class ShowSelectionPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: OPTIONS_DATA,
        name: props.match.params.name
      };
    }
  
    render() {
      
      return (
        <div>
        <h1>{this.state.name}</h1>
        {this.state.collections.map((item, index) => {
          const { name } = item;
          if(this.state.name === name){
            return <span>{item.population} Millions</span>;
          }
        })}
        </div>
      );
    }
  }

export default ShowSelectionPage;