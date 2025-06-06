import {Guitar, CartItem} from "../types";
import { db } from "../data/db";

export type CartActions = 
{ type: 'add-to-cart', payload: {item: Guitar}} |
{ type: 'remove-from-cart', payload: {id: Guitar['id']}} |
{ type: 'decrease-quantity',  payload: {id: Guitar['id']}} |
{ type: 'increase-quantity',  payload: {id: Guitar['id']}} |
{ type: 'clear-cart'}

export type CartState = {
        data: Guitar[]
        cart: CartItem[]
}

const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }

export const initialState : CartState = {
    data: db,
    cart: initialCart()
}


const MAX_ITEMS = 5
const MIN_ITEMS = 0
    


export const cartReducer = (
    state: CartState = initialState,
    action: CartActions

) => {

    if(action.type === 'add-to-cart'){
         const itemExist = state.cart.find((guitar) => guitar.id === action.payload.item.id)
    
        //para evitar mutacion copiar el cart y setearlo

        let updatedCart : CartItem[] = []
        if(itemExist){
          updatedCart = state.cart.map(item => {

            if(item.id === action.payload.item.id){
                if(item.quantity < MAX_ITEMS){
                    return { ...item, quantity: item.quantity+ 1}
                }else{
                    return item
                }
            }else{
                return item
            }

          })
    
        }else{  
          const newItem : CartItem = {...action.payload.item, quantity : 1}
          updatedCart = [...state.cart, newItem]
        }

        return{
            ...state,
            cart: updatedCart
        }
    }

     if(action.type === 'remove-from-cart'){
        const updatedCart = state.cart.filter(item => action.payload.id !== item.id)
       
        return{
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === 'decrease-quantity'){
        const cart = state.cart.map(item => {
            if( item.id === action.payload.id && item.quantity > MIN_ITEMS){
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          }
        ).filter(item => item.quantity > 0);

        return{
            ...state,
            cart
        }
    }

    if(action.type === 'increase-quantity'){

        const cart = state.cart.map(item => {
            if( item.id === action.payload.id && item.quantity < MAX_ITEMS){
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          }
        );

        return{
            ...state,
            cart
        }
    }

    if(action.type === 'clear-cart'){
        return{
            ...state, //este es el resto es decir en este caso la db inicial 'data'
            cart: []
        }
    }

    return state

}