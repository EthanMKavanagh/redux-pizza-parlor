import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    combineReducers({
        homeScreen: homeScreenReducer,
        addressForm: addressFormReducer,
        checkout: checkoutReducer,
        admin: adminReducer
    })
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
     document.getElementById('root')
);
