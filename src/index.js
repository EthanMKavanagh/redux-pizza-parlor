import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const homeScreenReducer = (state = [], action) => {
	// TODO - set book list with data from server
	if (action.type === "SET_PIZZAS") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		return action.payload;
		//return action.payload;
	} else if (action.type === "SEND_PIZZA") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		console.log(action.payload);
		return action.payload;

		//return action.payload;
	}
	return state;
};

const store = createStore(
	combineReducers({
		homeScreen: homeScreenReducer,
		// addressForm: addressFormReducer,
		// checkout: checkoutReducer,
		// admin: adminReducer,
	})
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
