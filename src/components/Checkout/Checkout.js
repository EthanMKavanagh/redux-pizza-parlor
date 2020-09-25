import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Link, HashRouter as Router } from "react-router-dom";

class Checkout extends Component {

    state = {
        currentOrders: [],
    };

    componentDidMount() {
        this.getOrders();
    }
    
    getOrders = () => {
        axios({
            method: "GET",
            url: "/api/order"
        })
            .then((response) => {
                console.log('resdata: ', response.data);
                this.setState({
                    currentOrders: response.data
                });
            })
                .catch((err) => {
                    console.error(err);
                })
    }

    render() {
        return(
            <div>
                <header><h1>Your order</h1></header>
                <main>
                    <ul>
                        {this.state.currentOrders.map( (order, index) =>
                        <li key={index}> {order.customer_name} {order.street_address} {order.city} {order.zip} {order.type} {order.total} </li>
                        )}
                    </ul>
                </main>
            </div>
        )
    }
}

export default connect()(Checkout)



