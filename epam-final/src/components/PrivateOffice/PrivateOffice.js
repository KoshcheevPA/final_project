import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Button from "../Utils/Button";
import Orders from "../Orders/Orders";
import UserInfoEdit from "./UserInfoEdit";
import {connect} from "react-redux";
import {userInfoEdit, saveUserInfo} from "../../actions/actions";

class PrivateOffice extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='office'>
                    <div className='office__header'>
                        <h2 className='office__title'>Личный кабинет</h2>
                        <Button type={'button'} buttonText={'Выйти'} onClick={this.props.onLogOff}/>
                    </div>
                    {this.props.infoEdit ?
                        <UserInfoEdit userName={this.props.userName} userEmail={this.props.userEmail} saveUserInfo={this.props.saveUserInfo}/> :
                        <div className='office__user-info'>
                            <p className='office__text'>Имя: <span className='office__info'>{this.props.userName}</span></p>
                            <p className='office__text'>Email: <span className='office__info'>{this.props.userEmail}</span></p>
                            <Button type={'button'} buttonText={'Редактировать'} onClick={this.props.userInfoEdit}/>
                        </div>}
                    <div className='office__header'>
                        <h2 className='office__title'>Ваши записи</h2>
                    </div>
                    <Orders/>
                </div>
            );
        }
        return <Redirect to='/login'/>
    }
}

const mapStateToProps = ({infoEdit, userName, userEmail}) => {
    return {
        infoEdit,
        userName,
        userEmail
    };
};

export default connect(mapStateToProps, { userInfoEdit, saveUserInfo })(PrivateOffice);

// export default PrivateOffice;