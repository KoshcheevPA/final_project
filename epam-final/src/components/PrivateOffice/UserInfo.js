import React from 'react';
import Button from "../Utils/Button";
import Orders from "../Orders/Orders";

function UserInfo({userInfoEdit, onLogOff}) {
        return (
            <div className='office'>
                <div className='office__header'>
                    <h2 className='office__title'>Личный кабинет</h2>
                    <Button type={'button'} buttonText={'Выйти'} onClick={onLogOff}/>
                </div>
                <div className='office__user-info'>
                    <p className='office__text'>Имя: <span className='office__info'>Александр Керенский</span></p>
                    <p className='office__text'>Email: <span className='office__info'>kerenskiy@gov.ru</span></p>
                    <Button type={'button'} buttonText={'Редактировать'} onClick={userInfoEdit}/>
                </div>
                <div className='office__header'>
                    <h2 className='office__title'>Ваши записи</h2>
                </div>
                <Orders/>
            </div>
        );
    }

export default UserInfo;