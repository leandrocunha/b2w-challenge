import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import StarWars from './reducers/StarWars';
import Sagas from './sagas';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    StarWars,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
