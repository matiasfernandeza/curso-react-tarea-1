import React from 'react';
import OPTIONS_DATA from './options.data.js';
import Options from "../../components/options/options.component";

class HomePage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: OPTIONS_DATA
      };
    }
  
    render() {
      const { collections } = this.state;
      return (
        <div>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <Options key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
  }

export default HomePage;