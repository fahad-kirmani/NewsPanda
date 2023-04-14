
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/navbar';
import Newsection from './components/newsection';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom";

const App =()=>{
  const apikey = process.env.REACT_APP_API

  const [progress, setprogress] = useState(0)
  const setprog=(progress)=>{
    setprogress(progress)
  }
    
    return(
    <>
    <Router>
    <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
    <Navbar/>
    <Routes>
    <Route exact path="/General"  element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="general" cat="general"/>}/>
    <Route exact path="/"  element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="general" cat="general"/>}/>
    <Route exact path="/Business"   element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="business" cat="business"/>}/>
    <Route exact path="/Sports"   element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="sports" cat="sports"/>}/>
    <Route exact path="/Technology"   element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="technology" cat="technology"/>}/>
    <Route exact path="/Entertainment"  element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="entertainment"  cat="entertainment"/>}/>
    <Route exact path="/Health"  element={<Newsection setprogress={setprog} apikey={apikey} pageSize="5" key="health"  cat="health"/>}/>
    </Routes>
    </Router>
    </>
  )
}
export default App;