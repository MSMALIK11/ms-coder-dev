import React,{useEffect} from 'react'
import './App.scss';
import Home  from './component/Home.jsx';
import {BrowserRouter} from 'react-router-dom';
import {loadUser} from './store/Actions/User';
import {useDispatch} from 'react-redux';import axios from 'axios';
axios.defaults.withCredentials=true;
function App() {

  const dispatch=useDispatch();
useEffect(()=>{


dispatch(loadUser())
},[dispatch])
  return (
    <div className="App"> 
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
