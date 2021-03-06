import React, {Component} from 'react';
import Button from '../Utils/Button';

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
                    <li className='form__item'>
                        <p className='office__text'>Имя: <span className='office__info'>{this.state.nameLabel}</span></p>
                        <input className='form__input' defaultValue={this.props.userName}  maxLength='15' type='text' onChange={this.onLabelNameChange}/>
                    </li>
                    <li className='form__item'>
                        <p className='office__text'>Email: <span className='office__info'>{this.state.emailLabel}</span></p>
                        <input className='form__input' defaultValue={this.props.userEmail} type='text' onChange={this.onLabelEmailChange}/>
                    </li>
                    <li className='form__item'>
                        <div className='form__button-container'>
                            <Button type={'button'} buttonText={'Сохранить'} onClick={this.onHandleSave}/>
                            <Button type={'button'} buttonText={'Отмена'} onClick={this.props.cancelEdit}/>
                        </div>
                    </li>
                </ul>
        );
    }
}

export default UserInfoEdit;