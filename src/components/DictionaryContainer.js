import React from 'react';

import DictionaryDefinition from './DictionaryDefinition';
import SearchBar from './SearchBar';


class DictionaryContainer extends React.Component {
  state = {
    definition: [],
    searchTerm: ''
  }

  // CORS anywhere patch
  // https://cors-anywhere.herokuapp.com/

  handleFetch = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/${this.state.searchTerm}`, {
      headers: {
        "Accept": "application/json",
        "app_id": 'a30a1a5e',
        "app_key": 'b42a1bcf088e52727e8626ce2716e073'
      }
    })
    .then(res => res.json())
    .then(console.log)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleFetch();
    // this.handleApi();
  }



  render(){
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <DictionaryDefinition />
      </div>
    )
  }
}

export default DictionaryContainer;
