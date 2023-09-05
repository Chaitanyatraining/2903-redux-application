import { ACTION_TYPE } from "../types/ActionType"

const initialState = {
    products: [],
    cartData: []
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            return { ...state, cartData: [...state.cartData, action.payload] }

        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProducts = state.cartData.filter((cartItem) => cartItem.id !== action.payload)
            return { ...state, cartData: filterProducts }

            // cartItem.id !== action.payload
            // 1!==3 true
            // 2!==3 true
            // 3!==3 false

        case ACTION_TYPE.FETCH_PRODUCTS:
            return {...state, products:action.payload}
        default:
            return state
    }
}