import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { Route, Link, HashRouter as Router } from "react-router-dom";
import AddressForm from "../AddressForm/AddressForm";
import Checkout from '../Checkout/Checkout'
import Admin from '../Admin/Admin'

class App extends Component {
	state = {
		pizzaList: [],
	};
	componentDidMount() {
		this.getPizzas();
	}
	getPizzas = () => {
		axios({
			method: "GET",
			url: "/api/pizza",
		})
			.then((response) => {
				console.log(response);
				this.props.dispatch({
					type: "SET_PIZZAS",
					//same as results.rows from server
					payload: response.data,
				});
				this.setState({
					pizzaList: response.data,
				});
				console.log(this.state.pizzaList);
				console.log(response);
			})
			.catch((err) => {
				console.err(err);
			});
	};
	render() {
		return (
      		<Router>
				<div className='App'>
					<header className='App-header'>
						<h1 className='App-title'>Prime Pizza</h1>
					</header>
					<br />
					<Route path='/' exact>
						<ul>
							{this.state.pizzaList.map((pizza, index) => (
								<div>
									<li key={index}>
										{pizza.name}
										{pizza.description}
										{pizza.price}
										<button>Add Me</button>
									</li>
								</div>
							))}
						</ul>
						<img src='images/pizza_photo.png' />
					</Route>
			
					<Route path='/address-form' exact>
						<AddressForm />
					</Route>

					<Route path='/admin' exact>
						<Admin />
					</Route>

					<Route path='/checkout' exact>
						<Checkout />
					</Route>
				</div>
			</Router>
		);
	}
}

export default connect()(App);