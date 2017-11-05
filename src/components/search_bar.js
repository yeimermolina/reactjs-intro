import React, { Component } from 'react';

// const SearchBar = ()=> {
//   return <input/>;
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  
  render() {
    return <div className="search-bar">
    <input
      value = {this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />
    <button type="button" onClick={event => this.search()} >Search</button>
    </div>
  }
  
  onInputChange(term){
    this.setState({ term });
    // this.props.onSearchTermChange(term);
  }
  
  search(event){
    console.log(this.state.term)
    this.props.onSearchTermChange(this.state.term);
  }
}


export default SearchBar;