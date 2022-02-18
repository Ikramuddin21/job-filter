import React from 'react';
import './App.css';
import Content from './Content';
import data from './data.json';

const App = () => {
  console.log(data);
  return (
    <div className="app">
      <header className="header"></header>
      
      <div className="content">
        {data.map(singleData => <Content key={singleData.id} info={singleData} />)}
      </div>
    </div>
  );
}

export default App;
