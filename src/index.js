import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/A2_store'
import { Provider} from 'react-redux'
import A1_ReduxApp from './redux/A1_ReduxApp';
// provider is like a helper component which allows us to inject the store into the react component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {/* <A1_ReduxApp nameProp="Vish" /> */}
    </React.StrictMode>
  </Provider>
);

