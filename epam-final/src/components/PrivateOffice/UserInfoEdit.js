import React, {Component} from 'react';
import Button from "../Utils/Button";
import Orders from "../Orders/Orders";
import {saveUserInfo} from "../../actions/actions";

class UserInfoEdit extends Component {
    state = {
        nameLabel : this.props.userName,
        emailLabel: this.props.userEmail
    };

    onLabelNameChange = (e) => {
        this.setState({
            nameLabel: e.target.value
        })
    };

    onLabelEmailChange = (e) => {
        this.setState({
            emailLabel: e.target.value
        })
    };

    onHandleSave = (e) => {
        this.props.saveUserInfo({
            userName: this.state.nameLabel,
            userEmail: this.state.emailLabel
        });
    };

    render() {
        return (
                <ul className='office__user-info'>
                    <li>
                        <p className='office__text'>Имя: <span className='office__info'>{this.state.nameLabel}</span></p>
                        <input className='form__input' defaultValue={this.props.userName} type='text' onChange={this.onLabelNameChange}/>
                    </li>
                    <li>
                        <p className='office__text'>Email: <span className='office__info'>{this.state.emailLabel}</span></p>
                        <input className='form__input' defaultValue={this.props.userEmail} type='text' onChange={this.onLabelEmailChange}/>
                    </li>
                    <li>
                        <Button type={'button'} buttonText={'Сохранить'} onClick={this.onHandleSave}/>
                    </li>
                </ul>
        );
    }
}

export default UserInfoEdit;