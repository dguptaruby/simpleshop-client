import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import authReducer  from './reducers/Reducer'

const store = createStore(authReducer,applyMiddleware(reduxThunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
