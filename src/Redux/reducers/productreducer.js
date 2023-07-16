import React from 'react'
import ActionType from '../contants/Action-type'

const intial = {
    products :[],
}


export const productreducer=(state= intial, {type, payload}) =>{

    switch (type) {
        case ActionType.SET_PRODUCT:
            return {...state,products : payload};
        default:
            return state;
    }
}

const state = {
    some:"dd"
}

export const seletedproductreducer = (state = {}, {type, payload}) => {

    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state, payload};
        default:
            return state;
    }
}