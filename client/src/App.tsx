import React, { FC } from 'react';
import styles from './App.module.scss';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Navbar/>
      <Main/>
    </div>
  );
};

export default App;