import {createReducer, createAction} from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';
const ADD_CART = 'ADD_CART';
const DECREMENT_CART = 'DECREMENT_CART';
const DELETE_CART = 'DELETE_CART';

export const addCart = createAction(ADD_CART);
export const decrementCart = createAction(DECREMENT_CART);
export const deleteCart = createAction(DELETE_CART);

export const getCategories = () =>{
    let action = createAction(GET_CATEGORIES);
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data})=> dispatch(action(data)))
    }
};

const ininitialState = {
   categories: [],
   cart: [],
}

export default createReducer(ininitialState, (builder)=>{
        builder
        .addCase(GET_CATEGORIES, (state, action)=>{
            state.categories = action.payload
        })
        .addCase(ADD_CART, (state, action)=>{
            const idx = state.cart.findIndex((item)=>{
                return item.id === action.payload.id
            })
            if(idx > -1){
                state.cart[idx].count++
            } else{
                state.cart = [
                    {
                        ...action.payload,
                        count: 1,
                    },
                    ...state.cart
                ]
            }
        })
        .addCase(DECREMENT_CART, (state, action)=>{
            const idx = state.cart.findIndex((item)=>{
                return item.id === action.payload.id
            })
            state.cart[idx].count--
        })
        .addCase(DELETE_CART, (state, action)=>{
            state.cart = state.cart.filter(item =>{
                return item.id !== action.payload.id
            })
        })
})
