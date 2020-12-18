import React, { Component } from 'react';
import JsonDataArray from './Form/JsonDataArray';
import MenuForm from './Form/MenuForm';

class App extends Component {

  state = {
    jsonData: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/stations', {
      // mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(json);
          this.setState({ jsonData: json })
        });
      }
    });
  }
  //<JsonDataArray jsonData={this.state.jsonData} />
  render() {
    return (
      <div>

        <JsonDataArray jsonData={this.state.jsonData} />
      </div>)
  }
}
export default App;
