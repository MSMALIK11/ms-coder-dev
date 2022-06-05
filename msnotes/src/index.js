import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store/store';
import {Provider as AlertProvider,positions,transitions}  from 'react-alert';
import Template from 'react-alert-template-basic';


const options={
  position:positions.BOTTOM_CENTER,
timeout:4000,
transition:transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={Template} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
