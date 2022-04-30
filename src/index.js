import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import listStore from './store/ListStore';

export const StoreContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={listStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
