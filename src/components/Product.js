import React from 'react'
import {BrowserRouter as Router, Link} from'react-router-dom';
 const Product = (props)=>{

    return (
        
    <>        
<div style = {{border : '1px solid rgba(0, 0, 0, 0.05)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)', height : '300px', width : '250px', borderRadius : '8px', marginRight : '20px'}}>
    <img src = {props.image} style = {{display : 'block', marginLeft: 'auto', marginRight: 'auto', height : '250px', width : '200px'}}></img>
   <div style = {{marginBottom: '0%', height : '100px'}}> 
  <div style = {{display : 'flex', alignItems: 'center'}}><h5>{props.name}</h5> <h6 style = {{marginRight: '0px'}}>{props.price} $</h6>
    </div>
  
  
    
    <Link to={`/Details/${props.id}`} style = {{fontSize : '15px',color : 'white', textAlign: 'center', textDecoration:'none'}}>  <div style = {{backgroundColor : 'green',  border : 'none', borderRadius : '5px', height : '35px', width : '60px', paddingLeft : '10px', paddingTop: "3px"}}>
               More
                <i class="fas fa-chevron-right"></i>
            </div></Link>
       
  
    </div>
</div>
        </>
      
    )
 }
 export default Product;