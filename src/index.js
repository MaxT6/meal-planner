import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material';

// REDUX IMPORTS
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './state/reducer';

// REDUX STORE
let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
};
resetStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst> {/*This allows for Tailwind to style MUI components*/}
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

