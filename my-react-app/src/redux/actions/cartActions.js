// import axios from "axios"
// import * as actionTypes from "../constants/cartConstant"

// export const addToCart = (id,quantity) =>async(dispatch)=> {
//     const URL= "http://localhost:8000/"
//     try {
//       const {data}=  await axios.get( `${URL}/product/${id}`)
//       dispatch({type: actionTypes.ADD_TO_CART, payload: {...data, quantity}})
//     } catch (error) {
//          dispatch ({type: actionTypes.ADD_TO_CART_ERROR,payload:error.message})
//     }
    
// }

// export const removeFromCart = (id) =>(dispatch)=> {
//     dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id})
// }

import axios from "axios"
import * as actionTypes from "../constants/cartConstant"

export const addToCart = (id, quantity) => async (dispatch) => {
    const URL = "http://localhost:8000/"
    try {
        const { data } = await axios.get(`${URL}/product/${id}`)
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message })
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id })
    // Thunks are expected to return a function, so return a dummy function here
    return () => {}
}
