import React, { Component } from 'react';
import {connect} from 'react-redux';

class PizzaForm extends Component {
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
                    <button type='submit'>
                        Next
                    </button>
                </form>
            </section>
        );
    }
}

export default connect()(PizzaForm);