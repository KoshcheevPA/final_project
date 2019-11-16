import React from 'react';
import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Recorder from "./Recorder";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
        <div className="App">
          <Header/>
          <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/recorder' component={Recorder}/>
          </Switch>
          <Footer/>
        </div>
  );
}

export default App;
