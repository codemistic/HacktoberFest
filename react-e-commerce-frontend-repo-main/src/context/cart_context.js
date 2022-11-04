import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS
} from "../actions";

const initialState = {
	cart: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	total_items: 0,
	total_amount: 0,
	shipping_fee: 543
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	//add to cart
	const addToCart = (id, color, amount, product) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { id, color, amount, product }
		});
	};

	//remove item
	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: id });
	};

	//toggle amount
	const toggleAmount = (id, value) => {
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};

	//clear cart
	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);
	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
