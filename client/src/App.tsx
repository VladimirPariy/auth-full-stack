import React, { FC } from 'react';
import styles from './App.module.scss';
import Navbar from './components/navbar/Navbar';
import AppRouter from './components/AppRoutes/AppRoutes';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};

export default App;