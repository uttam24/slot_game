import React from 'react';
import SlotM from './SlotM';
import './App.css';



const App = ()=> {
  return (
    <div className="slotGame">
      <h1 className='headingGame'> 🎰 Welcome to <span style={{fontWeight:'bold'}}>Slot machine game </span> 🎰</h1>
      <div className='slotMachine'>
          <SlotM x={'😃'} y={'😃'}  z={'😃'} />
          <SlotM  x={'😃'} y={'😃'}  z={'🥰'}/>
          <SlotM  x={'😃'} y={'🎅'}  z={'😃'}/>
          <SlotM  x={'😃'} y={'😃'}  z={'😃'}/>

        </div>
    </div>
  );
}

export default App;
