import React from 'react';
import Foorter from '../components/Foorter';
import Header from '../components/Header';

// import { Container } from './styles';

function Main({children}) {
  return(
      <>
      <Header></Header>
      {children}
      <Foorter></Foorter>
      </>
  );
}

export default Main;