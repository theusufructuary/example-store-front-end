import React from 'react';

import css from './App.module.css';

import NavBar from '../NavBar/NavBar.js';
import Cards from '../Cards/Cards.js';

function App() {
  return (
    <div className={css.App}>
      <NavBar />
      <Cards />
    </div>
  );
}

export default App;
