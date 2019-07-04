import React from 'react';
import logo from './logo.svg';
// import './MaingPage.css';

type Props = {
  message: string
}

export const MainPageComponent: React.FC<Props> = ({message}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {message} 
        </p>
      </header>
    </div>
  );
}
