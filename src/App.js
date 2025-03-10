import './App.css';
import Home from './Home.js';
import fb from './imgs/facebook.png';
import messenger from './imgs/messenger.png'
import gmail from './imgs/gmail.png'

function App() {
  return (
    <div className="App">
      <Home /> {/*  Opens Home.js  */}

      <footer className='Footer'>
        <div className='Copyright'>
          <p>Copyright © 2025 - Ker-C Printing Services</p>
        </div>
        <div className='Social'>
          <img src={fb} className='SocialImg'></img>
          <img src={gmail} className='SocialImg'></img>
          <img src={messenger} className='SocialImg'></img>
        </div>
      </footer>
    </div>    
  );
}

export default App;
