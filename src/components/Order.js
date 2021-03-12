import React , {useState}from 'react'
import {useDispatch} from 'react-redux'
import {deleteOrder, updateOrder} from '../redux/actions'
import Modal from 'react-modal'

const Order = (props)=>{
    const [modalState, setModalState]= useState(false)
    const [counter, setCounter] = useState(props.quantity)
const increment=()=>{
    setCounter(counter +1)
}
const decrement=()=>{
    setCounter(counter -1)
}

    let dispatch = useDispatch();
    const handleClick=()=>{
dispatch (deleteOrder({productId: props.id, productName: props.name, productImage: props.image, productPrice : props.price, productCount : props.quantity}))
    }
    const review=()=>{
        setModalState(true)
        dispatch (deleteOrder({productId: props.id, productName: props.name, productImage: props.image, productPrice : props.price, productCount : props.quantity}))
            }
            const submit = ()=>{
setModalState(false)
console.log(props.id+"id")
dispatch(updateOrder({productId: props.id, productName: props.name, productImage: props.image, productPrice : (props.price/props.quantity)*counter, productCount : counter}))

            }

    return (
        <>
      <div style = {{width : '80%', height : '250px', border : '1px solid rgba(0, 0, 0, 0.05)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)', display : 'flex', alignContent:'start'}}>  
<img src = {props.image} style = {{height : '250px', width :'200px'}}/>
       <div> <h4 style = {{marginRight: '50px', marginLeft: '50px'}}>{props.name}</h4>
        <h5 style = {{marginLeft: '50px'}}>{props.price}$</h5>
        <button style = {{backgroundColor : 'green', color : 'white', border : 'none', borderRadius : '8px', fontSize : '15px', height : '38px', width : '100px', marginRight:'20px', marginLeft: '50px'}} onClick = {handleClick}>Delete Order</button>
        <button style = {{backgroundColor : 'green', color : 'white', border : 'none', borderRadius : '8px', fontSize : '15px', height : '38px', width : '100px'}} onClick = {review}>Review</button>
        </div>
        </div>
        

        <Modal isOpen={modalState} >
            
        <div style = {{width : '100%', height : '250px', border : '1px solid rgba(0, 0, 0, 0.05)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)', display : 'flex', alignContent:'start'}}>  
<img src = {props.image} style = {{height : '250px', width :'200px'}}/>
       <div> <h4 style = {{marginLeft: '50px'}}>{props.name}</h4>
        <h5 style = {{marginLeft: '50px'}}>{props.price}$</h5>
        <button style = {{backgroundColor : 'green', color : 'white', border : 'none', borderRadius : '8px', fontSize : '15px', height : '38px', width : '100px', marginLeft: '50px'}} onClick = {submit}>Submit</button>
        <div style = {{display : 'flex', alignItems: 'start', marginLeft: '50px'}}><button onClick= {decrement} style = {{backgroundColor: "green", border : 'none', color : "white", marginTop : '23px', marginRight:"8px"}}>-</button>
        <h3>{counter}</h3>
        <button onClick= {increment} style = {{backgroundColor: "green", border : 'none', color : "white", marginTop : '23px', marginLeft:"8px"}}>+</button></div> 
        </div></div>
            
            </Modal>   
        </>
    )
}

export default Order;