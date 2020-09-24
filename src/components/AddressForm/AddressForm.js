import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class PizzaForm extends Component {

    state = {
        newAddress: {
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: '',
            pizzas: [{
                id: '',
                quantity: ''
            }]
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
                    <input required
                        type='text'
                        placeholder='Name'
                        onChange={(event) => this.handleChangeFor('customer_name', event)}
                    />
                    <input required
                        type='text'
                        placeholder='Street Address'
                        onChange={(event) => this.handleChangeFor('street_address', event)}
                    />
                    <input required
                        type='text'
                        placeholder='City'
                        onChange={(event) => this.handleChangeFor('city', event)}
                    />
                    <input required
                        type='text'
                        placeholder='Zip'
                        onChange={(event) => this.handleChangeFor('zip', event)}
                    />
                    <input type="radio" name='choice' value='Pickup'
                        onChange={(event) => this.handleChangeFor('type', event)}
                    />Pickup
                    <input type='radio' name='choice' value='Delivery'
                        onChange={(event) => this.handleChangeFor('type', event)}
                    />Delivery
                    <button type='submit'>Next</button>
                </form>
            </section>
        );
    }
}

export default connect()(withRouter(PizzaForm));