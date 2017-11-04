import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCM2FuhJ3tNU3-aKi9OuasMUXK1Q_1ppvI';

YTSearch({key: API_KEY, term: 'linkin park'}, function(data){
  console.log(data)
});

class App extends Component {
  constructor(props){
      super(props);
      
      this.state = { videos: [] };
      
      YTSearch({key: API_KEY, term: 'linkin park'}, videos => {
        this.setState({ videos });
      });
      
      
  }
  
  render(){
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  
}

ReactDOM.render(<App/>, document.querySelector('.container') );