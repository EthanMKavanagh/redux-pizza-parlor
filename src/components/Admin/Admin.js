import Axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class adminPanel extends Component {

    state = {
        ordersList: []
    }

    componentDidMount(){
        this.getOrders();
    }

    getOrders = () => {
        Axios({
            method: 'GET',
            url: '/api/order'
        }).then(response => {
            console.log('GET response', response.data);
            this.setState({
                ordersList: response.data
            });
            console.log('this.ordersList:', this.ordersList);
        }).catch(err => {
            console.error('GET error:', err);
        })
    }

    render() {
        return (
            <div>
                <header><h1>All current orders:</h1></header>
                <main>
                    <ul>
                        {this.state.ordersList.map( (order, index) => 
                        <li key={index}> {order.customer_name} {order.street_address} {order.city} {order.zip} {order.type} {order.total} </li>
                        )}
                    </ul>
                </main>
            </div>
        )
    }
}

export default adminPanel;