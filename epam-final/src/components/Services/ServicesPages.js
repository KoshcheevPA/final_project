import React, {Component} from 'react';
import Button from '../Utils/Button';
import ServiceForm from './ServiceForm';

class ServicesPages extends Component {
    state = {
        formOpen: false
    };

    buttonHandler = () => {
        this.setState({
            formOpen: !this.state.formOpen
        })
    };

    render() {
        const form = this.state.formOpen && <ServiceForm selectedItem={this.props.services.serviceName}/>;
        return (
            <section className='service-page'>
                <div>
                    <h1 className='service__title service-page__title'>{this.props.services.serviceName}</h1>
                    <p className='service-page__description'>{this.props.services.fullDescription}</p>
                </div>
                <span className='service__info'>{this.props.services.price}₽</span>
                <Button type={'button'} onClick={this.buttonHandler} buttonText={this.state.formOpen ? 'Отмена' : 'Записаться'}/>
                {form}
            </section>
        );
    }
}

export default ServicesPages;