import React, {Component} from 'react';
import Button from "../Utils/Button";
import ServiceData from "../../ServiceData";
import ServiceSelect from "./ServicesSelect";
import {connect} from "react-redux";
import SubmitSuccess from "../Utils/SubmitSuccess";
import Orders from "../Orders/Orders";
import { addOrder } from '../../actions/actions.js'

class ServiceForm extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.service = React.createRef();
        this.date = React.createRef();
        this.time = React.createRef();
        this.state = { submit: false };
    }

   

    onSubmit = (e) => {
        this.props.addOrder({
            id: new Date().getMilliseconds() + this.name.current.value,
            name: this.name.current.value,
            service: this.service.current.value,
            email: this.email.current.value,
            date: this.date.current.value,
            time: this.time.current.value
        });
        e.preventDefault();
        this.setState({submit: true});
    };

    render() {
        let dateToday = new Date();
        let minDate = dateToday.toISOString().split('T')[0];
        let afterTwoWeeks = new Date(dateToday.setDate(dateToday.getDate()+ 14));
        let maxDate = afterTwoWeeks.toISOString().split('T')[0];

        if(this.state.submit) {
            return <SubmitSuccess />
        }

        return (
            <div>
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
                        <input className='form__input' ref={this.date} defaultValue={minDate} min={minDate} max={maxDate} type='date' placeholder='Желаемая дата' id='dateInput' required/>
                    </li>
                    <li className='form__item'>
                        <label className='form__text' htmlFor='timeInput'>Время:</label>
                        <input className='form__input' type='time' ref={this.time} defaultValue="09:00" min="09:00" max="22:00" placeholder='Желаемая дата' id='timeInput' required/>
                    </li>
                </ul>
                <Button type={'submit'} buttonText={'Отправить'}/>
            </form>
                <Orders/>
            </div>
        );
    }
}

const mapStateToProps = ({orders}) => {
    return {
        orders
    };
};

export default connect(mapStateToProps, { addOrder })(ServiceForm);