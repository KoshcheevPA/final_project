import React, {Component} from 'react';
import NavigationItem from "./NavigationItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Navigation extends Component {
    render() {
        return (
            <nav className='page-header__navigation'>
                <ul className='page-header__list'>
                    <NavigationItem path={'/'} text={'Главная'} />
                    <NavigationItem path={'/recorder'} text={'Услуги'} />
                    <NavigationItem path={'/record'} text={'Запись'} />
                    <NavigationItem path={'/orders'} text={'Ваши записи'} />
                    <li className='page-header__list-item page-header__list-item--personal'>
                        <NavLink to='/login' className='page-header__link'>
                            {this.props.isLoggedIn ?
                                this.props.userName
                                :
                                <svg className='page-header__personal-logo' width="34" height="34" x="0" y="0" viewBox="0 0 95 92" stroke='#09d3ac' strokeWidth='3'>
                                    <g fill='#09d3ac'>
                                        <path d="M23.297,35.602c0,13.346,10.857,24.203,24.203,24.203s24.205-10.857,24.205-24.203S60.846,11.398,47.5,11.398   S23.297,22.256,23.297,35.602z M69.861,35.602c0,12.329-10.031,22.359-22.361,22.359c-12.328,0-22.359-10.03-22.359-22.359   S35.172,13.242,47.5,13.242C59.83,13.242,69.861,23.272,69.861,35.602z"/>
                                        <path d="M62.348,57.437l-0.359-0.048l-0.297,0.208c-4.178,2.952-9.086,4.512-14.191,4.512s-10.014-1.56-14.191-4.512l-0.297-0.208   l-0.359,0.048C15.436,59.757,7.416,67.778,7.416,82.68v0.922h80.168V82.68C87.584,67.778,79.564,59.757,62.348,57.437z    M9.27,81.758c0.316-13.288,7.537-20.236,23.275-22.444c4.426,3.037,9.588,4.64,14.955,4.64s10.529-1.603,14.955-4.64   c15.74,2.208,22.961,9.157,23.275,22.444H9.27z"/>
                                    </g>
                                </svg>
                            }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({isLoggedIn, userName}) => {
    return {
        isLoggedIn,
        userName
    };
};

export default connect(mapStateToProps)(Navigation);