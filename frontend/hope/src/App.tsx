import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </Provider>
  </>
);

export default App;
