export const ADD_ORDER = 'ADD_ORDER'
export const AddOrder = (order)=>{
    return ({
    type : ADD_ORDER,
    payload : order
    })
}
export const DELETE_ORDER = 'DELETE_ORDER'
export const deleteOrder = (order)=>{
    return ({
    type : DELETE_ORDER,
    payload : order
    })
}

export const UPDATE_ORDER = 'UPDATE_ORDER'
export const updateOrder = (order)=>{
    return ({
    type : UPDATE_ORDER,
    payload : order
    })
}
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const searchProduct = (productTitle)=>{
    return ({
    type : SEARCH_PRODUCT,
    payload : productTitle
    })
}

export const SET_CLICKED = 'SET_CLICKED'
export const setClicked = (click)=>{
    return ({
    type : SET_CLICKED,
    payload : click
    })
}