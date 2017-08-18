import React, { Component } from 'react';
import ConcertMarquee from './ConcertMarquee.jsx';
import NavBar from './NavBar.jsx';
import { setView } from './actions.js';
import QuestionsContainer from './QuestionsContainer.jsx';
// import Playlist from './Playlist.jsx';
import Home from './Home.jsx';

// THIS WILL NEVER CONTAIN THIS.STATE ANYWHERE - 
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Home
          view={this.props.view}
          locations={this.props.locations}
          genres={this.props.genres}
        />
        <ConcertMarquee concertData={this.props.concerts} concertView={this.props.concerts_view_index} />
        {/* <Playlist /> */}
        <footer className="footer"> FOOTER </footer>
      </div>
    );
  }
}

export default App;
