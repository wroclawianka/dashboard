import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './styles/index.css';
import App from './components/App';
import reducers from './reducers';

export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

