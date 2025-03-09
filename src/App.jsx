import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main className="container mx-auto px-4 py-16">
        <Outlet />
      </Main>
    </>
  );
};

export default App;
