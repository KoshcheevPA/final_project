import React from 'react';
import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Recorder from "./Recorder";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
                <Route path='/main' component={Main}/>
                <Route path='/#about' component={Main}/>
                <Route path='/recorder' component={Recorder}/>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
