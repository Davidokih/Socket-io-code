import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	qty: 0,
	totalPrice: 0,
};

const actions = createSlice({
	name: "oja",
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el._id === payload._id);

			if (check >= 0) {
				state.cart[ check ].qty += 1;
			} else {
				state.cart.push({ ...payload, qty: 1 });
			}

			state.qty += 1;
			state.totalPrice += payload.qty * payload.price;
		},

		removeCart: (state, { payload }) => {
			const check = state.cart.findIndex((el) => el._id === payload._id);

			if (state.cart[ check ].qty > 1) {
				state.cart[ check ].qty -= 1;
			} else {
				state.cart = state.cart.filter((el) => el._id !== payload._id);
			}
			state.qty -= 1;
			state.totalPrice -= payload.price;
		},
		removeqty: (state, { payload }) => {
			payload.quantity -= payload.qty;
		}
	},
});

export const { addToCart, removeCart, removeqty } = actions.actions;

export default actions.reducer;
