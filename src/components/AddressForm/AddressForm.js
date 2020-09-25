import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './AddressForm.css';

class PizzaForm extends Component {

    state = {
        newAddress: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: '',
            total: 30
        }
    }

    handleChangeFor = (propertyName, event) => {
        console.log([propertyName], 'is:', event.target.value);
        this.setState({
            newAddress: {
                ...this.state.newAddress,
                [propertyName]: event.target.value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('this.state.newAddress:', this.state.newAddress);
        axios({
            method: 'POST',
            url: '/api/order',
            data: this.state.newAddress
        }).then(response => {
            console.log('POST newAddress:', response);
            this.props.history.push('/checkout');

            this.props.dispatch({
                type: 'SET_ADDRESS',
                payload: event.target.value
            });
        }).catch(err => {
            console.error('POST newAddress error:', err);
        });
    }

    render() {
        return (
            <section>
                <h3>Step 2</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='input'>
                        <input required
                            type='text'
                            placeholder='Name'
                            onChange={(event) => this.handleChangeFor('customer_name', event)}
                        />
                    </div>
                    <div className='input'>
                        <input required
                            type='text'
                            placeholder='Street Address'
                            onChange={(event) => this.handleChangeFor('street_address', event)}
                        />
                    </div>
                    <div className='input'>
                        <input required
                            type='text'
                            placeholder='City'
                            onChange={(event) => this.handleChangeFor('city', event)}
                        />
                    </div>
                    <div className='input'>
                        <input required
                            type='text'
                            placeholder='Zip'
                            onChange={(event) => this.handleChangeFor('zip', event)}
                        />
                    </div>
                    <div>
                        <input type="radio" name='choice' value='Pickup'
                            onChange={(event) => this.handleChangeFor('type', event)}
                        />Pickup
                        <input type='radio' name='choice' value='Delivery'
                            onChange={(event) => this.handleChangeFor('type', event)}
                        />Delivery
                    </div>
                    <button type='submit'>Next</button>
                </form>
            </section>
        );
    }
}

export default connect()(withRouter(PizzaForm));