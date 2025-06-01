// import { useEffect, useState } from "react"
// import type { Guitar, CartItem } from "../types"

// export const useCart = () =>{
    
    
   
//       const [cart, setCart] = useState(initialCart)
    
//       const MAX_ITEMS = 5
//       const MIN_ITEMS = 0
    
//     //cada que cart cambie, ejecutara eso
//       useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart))
    
//       },[cart])
  
    
//       function removeFromCart(id : Guitar['id'] ){
//         setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
//       }
    
    
//       function decreaseQuantity(id : Guitar['id'] ) {
//         const updatedCart = cart.map(item => {
//             if( item.id === id && item.quantity > MIN_ITEMS){
//               return { ...item, quantity: item.quantity - 1 }
//             }
//             return item
//           }
//         ).filter(item => item.quantity > 0);
//         setCart(updatedCart); 
//       }
    
   
//       // function saveLocalStorage(){
//       //   setCart(prevCart => {
//       //     const updatedCart = [...prevCart];
//       //     localStorage.setItem('cart', JSON.stringify(updatedCart));
//       //     return updatedCart; 
//       //   });
//       // }

     
//     return {
      
//         cart,
//         removeFromCart,
//         decreaseQuantity,
//         clearCart
    
//     }
// }

