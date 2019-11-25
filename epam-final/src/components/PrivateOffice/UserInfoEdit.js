import React, {Component} from 'react';
import Button from "../Utils/Button";
import Orders from "../Orders/Orders";

class UserInfoEdit extends Component {
    state = {
        nameLabel : '',
        emailLabel: ''
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

    render() {
        return (
            <div className='office'>
                <div className='office__header'>
                    <h2 className='office__title'>Личный кабинет</h2>
                    <Button type={'button'} buttonText={'Выйти'} onClick={this.props.onLogOff}/>
                </div>
                <div className='office__user-info'>
                    <p className='office__text'>Имя: <span className='office__info'>{this.state.nameLabel}</span></p>
                    <input type='text' onChange={this.onLabelNameChange}/>
                    <p className='office__text'>Email: <span className='office__info'>{this.state.emailLabel}</span></p>
                    <input type='text' onChange={this.onLabelEmailChange}/>
                    <Button type={'button'} buttonText={'Сохранить'} onClick={this.props.userInfoEditSave}/>
                </div>
                <div className='office__header'>
                    <h2 className='office__title'>Ваши записи</h2>
                </div>
                <Orders/>
            </div>
        );
    }
}

export default UserInfoEdit;