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

    return state;
}

export default addressFormReducer;