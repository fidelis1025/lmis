import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider >
    <BrowserRouter>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </BrowserRouter>
  </Provider>
);


