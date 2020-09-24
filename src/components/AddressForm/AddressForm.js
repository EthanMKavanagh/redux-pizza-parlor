import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class PizzaForm extends Component {

    state = {
        newAddress: {
            name: '',
            streetAddress: '',
            city: '',
            zip: ''
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newAddress: {
                ...this.state.newAddress,
                [propertyName]: event.target.value
            }
        });
    }

    handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: this.state.newAddress
        }).then(response => {
            console.log('POST newAddress:', response);
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
                        onChange={(event) => this.handleChangeFor('name', event)}
                    />
                    <input required
                        type='text'
                        placeholder='Street Address'
                        onChange={(event) => this.handleChangeFor('streetAddress', event)}
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
                    <input
                        type="radio" name='choice' value='Pickup'
                    />
                    <input
                        type='radio' name='choice' value='Delivery'
                    />
                    <button type='submit'>Next</button>
                </form>
            </section>
        );
    }
}

export default connect()(PizzaForm);