import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
    };

    const removeItemFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const updateCartItemQuantity = (id, newQuantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const AddQuantity = (id) => {
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1 && cartItems[index].quantity !== 10) {
            const updatedQuantity = cartItems[index].quantity + 1;
            updateCartItemQuantity(id, updatedQuantity);
        }
    };

    const DecQuantity = (id) => {
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1 && cartItems[index].quantity > 1) {
            const updatedQuantity = cartItems[index].quantity - 1;
            updateCartItemQuantity(id, updatedQuantity);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, AddQuantity, DecQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
