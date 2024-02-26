import React, { createContext, useEffect, useState } from 'react'

export const CartContextCreate = createContext(null)

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [pay, setPay] = useState(false)
    const [tolaAmount, setTotalAmount] = useState(0)
    const ls = typeof window !== 'undefined' ? window.localStorage : null

    const addToCart = (value) => {
        const newCart = [...cart]
        const findCartProduct = newCart.find(c => c.id === value.id)
        if (findCartProduct) {
            findCartProduct.quantity += 1;
            setCart(newCart)
            return ls?.setItem('cart', JSON.stringify(cart))

        }
        else {
            const newValue = { ...value, quantity: 1 }
            const newArr = [...cart, newValue]
            setCart(newArr)
            return ls?.setItem('cart', JSON.stringify(newArr))
        }

    }
    const removeFromCart = (id) => {
        const newCart = [...cart]
        const filttercart = newCart.filter((value) => value.id !== id)
        setCart(filttercart)
        ls?.setItem('cart', JSON.stringify(filttercart))

    }

    const increseQuantity = (value) => {
        const newCart = [...cart]
        const findCartProduct = newCart.find(c => c.id === value)
        if (findCartProduct) {
            findCartProduct.quantity += 1;
            setCart(newCart)
            return ls?.setItem('cart', JSON.stringify(cart))
        }
        return
    }

    const deincreseQuantity = (value) => {
        const newCart = [...cart]
        const findCartProduct = newCart.find(c => c.id === value)
        if (findCartProduct) {
            findCartProduct.quantity -= 1;
            setCart(newCart)
            return ls?.setItem('cart', JSON.stringify(cart))

        }
        return
    }


    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            const localCart = JSON.parse(ls.getItem('cart'))
            setCart(localCart);
        }
    }, []);

    return (
        <CartContextCreate.Provider value={{ cart, addToCart, removeFromCart, increseQuantity, deincreseQuantity, pay, setPay, tolaAmount, setTotalAmount }}>
            {children}
        </CartContextCreate.Provider>
    )
}

export default CartContextProvider