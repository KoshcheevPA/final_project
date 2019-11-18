import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Recorder from "./Recorder";
import {Route, Switch} from "react-router-dom";
import ServicesRoute from "./ServiceRoutes";
import ServiceData from "../ServiceData";

function App() {
  return (
        <div className="App">
          <Header/>
          {/*<Switch>*/}
                <Route exact path='/' component={Main}/>
                <Route path='/recorder' component={Recorder}/>
                <ServicesRoute services={ServiceData}/>
          {/*</Switch>*/}
          <Footer/>
        </div>
  );
}

export default App;
