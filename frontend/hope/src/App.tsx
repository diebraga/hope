import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import store from './store';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Header />

      <Router>
        <Routes />
      </Router>
    </Provider>
  </>
);

export default App;
