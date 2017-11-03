import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCM2FuhJ3tNU3-aKi9OuasMUXK1Q_1ppvI';

const App =  () => {
  return <div>
    <SearchBar/>
  </div>
}

ReactDOM.render(<App/>, document.querySelector('.container') );