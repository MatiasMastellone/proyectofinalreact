import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    

    const addItem = (item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(prev => [...prev,{...item,quantity}])

        }else{
            const actualizarProductos = cart.map(pos=>{
                if(pos.id === item.id)
                return{...pos,quantity:pos.quantity+quantity}
                else return pos
            })
            setCart(actualizarProductos)            
        }

    }

    const isInCart = (id) => {
        return (
            cart.some(prod => prod.id===id)
        )

    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const total = cart.reduce((act,val)=>act+val.quantity,0)
  
   

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )


}