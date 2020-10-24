import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://vvaleri.github.io/redsoft/db.json')
    .then(res => res.json())
    .then(json => setCards(json))
  }, [])

  

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Main items={cards}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
