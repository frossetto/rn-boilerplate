import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux';
import Home from './views/Home/index';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
