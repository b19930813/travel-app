import React from 'react';
import Card from '../Frame/card'
import Card1 from '../Frame/card1'
import Card2 from '../Frame/card2'
import '../Css/basic.css'

function App() {
  
  return (
    <div >
      <div className="Card">
        <Card />
      </div>
      <div className="Card">
        <Card1 />
      </div>
      <div className="Card">
        <Card2 />
      </div>
    </div>
  );
}

export default App;
