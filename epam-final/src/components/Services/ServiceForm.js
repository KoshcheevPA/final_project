import React, {Component} from 'react';
import Button from "../Utils/Button";
import ServiceData from "../../ServiceData";
import ServiceSelect from "./ServicesSelect";

class ServiceForm extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.service = React.createRef();
        this.date = React.createRef();
        this.time = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(
            this.name.current.value,
            this.email.current.value,
            this.date.current.value,
            this.time.current.value,
            this.service.current.value);
    };

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <ul className='form__list'>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='nameInput'>Услуга:</label>
                        <ServiceSelect services={ServiceData} refName={this.service} selectedItem={this.props.selectedItem}/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='nameInput'>Ваше имя:</label>
                        <input className='form__input' ref={this.name} type='text' placeholder='Ваше имя' id='nameInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='emailInput'>Ваш email:</label>
                        <input className='form__input' ref={this.email} type='email' placeholder='Ваш email' id='emailInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='dateInput'>Дата:</label>
                        <input className='form__input' ref={this.date} type='date' placeholder='Желаемая дата' id='dateInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='timeInput'>Время:</label>
                        <input className='form__input' ref={this.time} type='time' placeholder='Желаемая дата' id='timeInput' required/>
                    </li>
                </ul>
                <Button type={'submit'} buttonText={'Отправить'}/>
            </form>
        );
    }
}

export default ServiceForm;