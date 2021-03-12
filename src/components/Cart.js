import React from 'react'
import {useSelector} from 'react-redux'
import Order from './Order'
const Cart = ()=>{
let orders = useSelector(state=>state.reducerOrders)
    return (
        <>
        {orders.map(order=><Order id = {order.productId} image = {order.productImage} name = {order.productName} price = {order.productPrice} quantity = {order.productCount}></Order>)}
        </>
    )
}

export default Cart;