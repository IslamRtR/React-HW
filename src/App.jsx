import React, { useState } from 'react';
import './App.css';

import BookCard from './components/BookCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cards">
      <BookCard image="https://media.istockphoto.com/id/153952958/photo/blank-hardcover-book-with-copy-space.jpg?s=612x612&w=0&k=20&c=0GwreFm2LXIR0_irlkOvvz45hfRlova_pTZr-v32Pyg=" title="red book" authors1="Ислам" authors2="2008"/>
      <BookCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlf4l_FWwTkgsxIoMEJkkqeAvznJnEuk0jg&s" title="blue book" authors1="Бибарыс" authors2="2010"/>
      <BookCard image="https://www.shutterstock.com/image-photo/closed-green-book-isolated-on-260nw-265051619.jpg" title="green book" authors1="Еркебулан" authors2="2009"/>
    </div>
  );
}

export default App;
