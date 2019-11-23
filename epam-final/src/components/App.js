import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Recorder from "./Services/Recorder";
import {Route, Switch} from "react-router-dom";
import ServicesRoute from "./Services/ServiceRoutes";
import ServiceData from "../ServiceData";
import ServiceForm from "./Services/ServiceForm";
import Orders from "./Orders/Orders";
import LoginForm from "./Login/LoginForm";
import Registration from "./Registration/Registration";

function App() {
  return (
        <div className="App">
          <Header/>
          {/*<Switch>*/}
                <Route exact path='/' component={Main}/>
                <Route path='/recorder' component={Recorder}/>
                <Route path='/record' component={ServiceForm}/>
                <Route path='/orders' component={Orders}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/registration' component={Registration}/>
                <ServicesRoute services={ServiceData}/>
          {/*</Switch>*/}
          <Footer/>
        </div>
  );
}

export default App;
