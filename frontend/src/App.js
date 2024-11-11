import VideoList from './VideoList';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to PopVid!</h1>
        <p>
          Discover the latest and trending videos from around the world. Stay updated on what’s hot!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Main content area */}
      <main className="App-main">
        <h2>Explore Trending Videos</h2>
        <p>Explore the newest and most popular videos that everyone is watching.</p>

        <button onClick={handleClick} className="App-button">
          Show Welcome Message
        </button>

        {showMessage && (
          <p className="message">
            Welcome to PopVid, your go-to place for trending videos!
          </p>
        )}

        {/* The VideoList component */}
        <VideoList />
      </main>

      {/* Footer section */}
      <footer className="App-footer">
        <p>Created with ❤️ by Your Name © 2024</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/yourusername/popvid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;