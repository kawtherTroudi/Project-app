import {productList, orders, clicked} from './states';
import {ADD_ORDER, DELETE_ORDER, SEARCH_PRODUCT, SET_CLICKED, UPDATE_ORDER} from './actions'

export let reducerOrders = (state= orders, action)=>{

    switch (action.type)
    {
        case ADD_ORDER :
            state = [...state, action.payload]
            return state
            case DELETE_ORDER :
            let index = state.findIndex(item => item.productId ===action.payload.productId)
            console.log(index+"delete")
            let newOrders = state.splice(index, 1)
            return newOrders             
                case UPDATE_ORDER :
                    let newState = state.map(el => {
                        if (el.productId === action.payload.productId) {
                            return {...action.payload}
                        }
                        else return el
                    })
                    return (newState)
                    //console.log(action.payload.productId+"reducer")
                  /*  let pos = 0
                    let i =0
                    while (i < state.length){
                        if(state[pos].productId===action.payload.productId)
                        pos = i
                        else 
                        i++
                    }
                   // let pos = state.findIndex(order=>order.productId===action.payload.productId)
            state.splice(pos, 1)
           console.log(pos+"index")
            console.log(JSON.stringify(state.splice(pos, 1))+"splice1")
            console.log(JSON.stringify(state.splice(pos, 0,action.payload))+"splice2")
           return state.splice(pos, 0,action.payload)  */
                      
                default :
                break;
}
return state
}

export let reducerProduct = (state= productList, action)=>{
    switch (action.type){
        case SEARCH_PRODUCT :
            let newList = state.filter(item => item.name.includes(action.payload))
            return newList
            default :
            break;
    }
    return state
}
export let reducerClicked = (state= clicked, action)=>{
    switch(action.type){
        case SET_CLICKED :
          state = action.payload
        
            return state
            default :
            break;
    }
    return state
}