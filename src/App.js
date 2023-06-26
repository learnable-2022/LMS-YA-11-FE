import React from 'react';
import './App.css';
import Navbar from './Components/Navbar Section/Navbar';
import Sidebar from './Components/Sidebar Section/Sidebar';
import Body from './Components/Body Section/Body';

function App() {
  return (
    <div className="container">

      <header className='navBar'>
        <Navbar/>
      </header>

      <div className='content'>
        <aside className='sidebar'>
          <Sidebar/>
        </aside>

        <main>
          <Body />
        </main>
      </div>
    </div>
  );
}

export default App;
