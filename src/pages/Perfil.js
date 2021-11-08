import React, { useState } from 'react';
import Header from '../components/Header';

function Perfil() {
  const [title] = useState('Perfil');
  const [haveSearch] = useState(false);
  return (
    <>
      <Header title={ title } haveSearch={ haveSearch } />
      <h1>Página não encontrada :(</h1>
    </>
  );
}

export default Perfil;
