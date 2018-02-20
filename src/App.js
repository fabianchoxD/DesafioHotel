import React, { Component } from 'react';
import './Css/App.css';
import NavigationHeader from './Components/NavigationHeader';
import HotelList from './Components/HotelList';
import Search from './Components/Search';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      filterText: ''
    };
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  render() { 
    //console.log('FilterText state from parent Component', this.state.filterText)
    return (
      <div>
          <NavigationHeader/>          
          <Search 
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />          
          <HotelList 
            data={this.props.data} 
            filterText={this.state.filterText} 
          />
      </div>     
    );
  }
}

export default App;
