import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { AddOrder, setClicked } from '../redux/actions'
 const ProductDetails = (props)=>{
    const productId = parseInt(props.match.params.id)
const products = useSelector(state=>state.reducerProduct)
let dispatch = useDispatch();
const product = products.find(item=>item.id===productId)
const [counter, setCounter] = useState(0)
const increment=()=>{
    setCounter(counter +1)
}
const decrement=()=>{
    setCounter(counter -1)
}
const handleClick = ()=>{
    dispatch(setClicked(true))
    dispatch(AddOrder({productId: product.id, productName: product.name, productImage: product.image, productPrice : product.price*counter, productCount : counter}))

}
    return (
        <>
        <div style = {{display : 'flex', alignItems : 'start'}}>
        <img src = {product.image} style = {{ height : '570px', marginRight: '50px' }}/>
        <div>
            <div style = {{display : 'flex', flexFlow : 'column-wrap', alignItems: 'space-between'}}><h3 style = {{marginRight : '500px'}}>{product.name}</h3>
       <h3 >{product.price}</h3></div>
        <p>{product.description}</p>
       <div style = {{display : 'flex', alignItems: 'start'}}><button onClick= {decrement} style = {{backgroundColor: "green", border : 'none', color : "white", marginTop : '23px', marginRight:"8px"}}>-</button><h3>{counter}</h3><button onClick= {increment} style = {{backgroundColor: "green", border : 'none', color : "white", marginTop : '23px', marginLeft:"8px"}}>+</button></div> 
        <button style = {{backgroundColor : 'green', color : 'white', border : 'none', borderRadius : '8px', fontSize : '15px', height : '38px', width : '100px'}} onClick= {handleClick}>Add To Cart</button> 
        </div>
        </div>       
        </>
    )
 }
 export default ProductDetails;