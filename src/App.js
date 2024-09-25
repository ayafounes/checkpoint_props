import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CardComp from './card'; // Make sure this is the correct path to your card component
import {players} from './players'; // Import the players array from players.js

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', margin: '20px' }}>
      {players.map((player, index) => (
        <CardComp 
          key={index}
          name={player.name}
          nationality={player.nationality}
          team={player.team}
          number={player.number}
          age={player.age}
          image={player.image} 
        />
      ))}
    </div>
  );
}

export default App;
