import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        getTotalPrice()
    }, [cartListItems])

    const getTotalPrice = () => {
        let total = 0
        cartListItems.forEach(prod => {
            total += prod.cantidad * prod.price
        })
        setTotalPrice(total)
    }

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setCartListItems(cartListItems => [...cartListItems , product])
        }
    }

    const deleteItem = (id) => {
        const auxCart = cartListItems.filter(prod => prod.id !== id)
        setCartListItems(auxCart)
    }


    const cleanCartProducts = () => {
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        deleteItem,
        totalPrice,
        cleanCartProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }