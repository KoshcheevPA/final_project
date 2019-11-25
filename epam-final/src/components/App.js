import React, {Component} from 'react';
import '../App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Recorder from './Services/Recorder';
import {Route} from 'react-router-dom';
import ServicesRoute from './Services/ServiceRoutes';
import ServiceData from '../ServiceData';
import ServiceForm from './Services/ServiceForm';
import Orders from './Orders/Orders';
import LoginForm from './Login/LoginForm';
import Registration from './Registration/Registration';
import PrivateOffice from './PrivateOffice/PrivateOffice';
import {userLogIn, userLogOff} from '../actions/actions';
import {connect} from 'react-redux';

class App extends Component {
  
    onLogin = () => {
        this.props.userLogIn();
    };

    onLogOff = () => {
        this.props.userLogOff();
    };

    render() {
        const {isLoggedIn} = this.props;
        return (
            <div className='App'>
                <Header/>
                    <Route exact path='/' component={Main}/>
                    <Route path='/recorder' component={Recorder}/>
                    <Route path='/record' component={ServiceForm}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/login' render={() => <LoginForm isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
                    <Route path='/private' render={() => <PrivateOffice isLoggedIn={isLoggedIn} onLogOff={this.onLogOff}/>}/>
                    <Route path='/registration' component={Registration}/>
                    <ServicesRoute services={ServiceData}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = ({isLoggedIn}) => {
    return {
        isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogIn: userLogIn(dispatch),
        userLogOff: userLogOff(dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
