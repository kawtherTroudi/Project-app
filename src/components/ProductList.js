import React from 'react'
import Product from './Product'
import {useSelector } from 'react-redux';

 const ProductList = ()=>{
    let products = useSelector(state=>state.reducerProduct)
    
    return (
        <div style = {{display : 'flex', alignItems:'flex-start'}}>
        {products.map(product => <Product name = {product.name} price = {product.price} id = {product.id} image = {product.image}/>)}         
        </div>
    )
 }
 export default ProductList;