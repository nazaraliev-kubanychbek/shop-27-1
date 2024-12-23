import {createReducer, createAction} from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';

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

})
