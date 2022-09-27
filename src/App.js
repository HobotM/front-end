import './App.css';
import Header from './components/Header';
import DatingCard from './components/DatingCard';
import React from 'react'
import ReactDOM from 'react-dom'


function App() {
  return (
    <div className="App">
     <h1>Dating app mern</h1>
     <Header />
     <DatingCard />
    </div>
  );
}

export default App;
