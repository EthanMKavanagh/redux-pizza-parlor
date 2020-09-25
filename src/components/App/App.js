import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { Route, Link, HashRouter as Router } from "react-router-dom";
import AddressForm from "../AddressForm/AddressForm";

class App extends Component {
	state = {
		pizzaList: [],
		currentCart: [],
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
				console.log(err);
			});
	};
	addMe = () => {
		console.log("you added this pizza", this.state.pizza);
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
										<button type='submit' onClick={this.addMe}>
											Add Me
										</button>
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
						<adminPanel />
					</Route>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (reduxStore) => ({
	reduxStore,
});

export default connect(mapStateToProps)(App);
