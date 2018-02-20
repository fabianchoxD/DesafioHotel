import React, { Component } from 'react';


class CheckBox extends Component {

	  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
    };

    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const val = 5;		
    
    if(this.state.isGoing === false){     
    this.props.filterUpdate(val);
    }
    else
  	{
  	console.log("False!!");
  	}
    

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.filterUpdate.bind(this)} />
        </label>        
      </form>
    );
  }
}

export default CheckBox;

