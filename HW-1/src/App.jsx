import React, { useState } from 'react';
import './App.css';

import BookCard from './components/D1_W26_HW/BookCard';
import KeyEvent from './components/D2_W26_HW/KeyEvent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <KeyEvent />
    </>
  );
}

export default App;
