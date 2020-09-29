import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />

    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
