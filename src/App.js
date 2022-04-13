import React, { Component } from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import FRPerentInput from './components/FRPerentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <ClickCounter/>
      <HoverCounter/>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
