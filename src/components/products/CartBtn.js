import { Button, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from '../../redux/cart/cartSlice'

const CartBtn = ({item}) => {
  const dispatch = useDispatch()
    const AddToCart = () =>{
        console.log(item)
        dispatch(setCart(item))
        message.success(`item added to cart`)
    }
  return (
    <div>
        <Button type='primary' onClick={AddToCart}>add to cart</Button>
    </div>
  )
}

export default CartBtn