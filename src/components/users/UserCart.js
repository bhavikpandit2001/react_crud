import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Modal, Table } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userCart } from '../../API/Index'
import { setUserCart } from '../../redux/users/userDataSlice'

const UserCart = ({cart}) => {
    const [openmodal, setOpenModal] = useState(false)
    const dispatch = useDispatch();
    const usercart = useSelector((state => state.userdata.cartlist))

    const ViewCart = () =>{
        setOpenModal(true)
        userCart(cart.id)
        .then(res =>{
            console.log(res.data.carts)
            dispatch(setUserCart(res.data.carts))
        }).catch(error =>{
            console.log(error)
        })

    }
  return (
    <div>
        <Button type='primary' onClick={ViewCart}><ShoppingCartOutlined/> user cart</Button>
        <Modal
        centered
        open={openmodal}
        onOk= {() =>{
            setOpenModal(true)
        }}
        onCancel= {() =>{
            setOpenModal(false)
        }}
        >
            <Table
            dataSource={usercart}
            ></Table>
        </Modal>
    </div>
  )
}

export default UserCart