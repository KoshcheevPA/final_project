import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Button from "../Utils/Button";
import Orders from "../Orders/Orders";

class PrivateOffice extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='office'>
                    <div className='office__header'>
                        <h2 className='office__title'>Личный кабинет</h2>
                        <Button type={'button'} buttonText={'Выйти'} onClick={this.props.onLogOff}/>
                    </div>
                    <div className='office__user-info'>
                        <p className='office__text'>Имя: <span className='office__info'>Александр Керенский</span></p>
                        <p className='office__text'>Email: <span className='office__info'>kerenskiy@gov.ru</span></p>
                        <Button type={'button'} buttonText={'Редактировать'} onClick={() => {
                        }}/>
                    </div>
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

export default PrivateOffice;