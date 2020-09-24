const initialAddress = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    total: "",
    type: "",
    pizzas: [
        {
            id: "",
            quantity: ""
        }
    ]
}

const addressFormReducer = (state = initialAddress, action) => {
    if (action.type === 'SET_ADDRESS') {
        console.log('AddressForm submission:', action.payload);
        return {
            state: action.payload
        }
    }

    return state;
}

export default addressFormReducer;