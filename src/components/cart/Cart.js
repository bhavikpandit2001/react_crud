import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Badge, Image, Modal, Table } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../redux/cart/cartSlice'
import "./cart.css"
const Cart = () => {
    const [draweropen, setDrawerOpen] =  useState(false)
    const cart = useSelector((state) => state.cart.list)
    const dispatch = useDispatch()

    const Open = () =>{
        setDrawerOpen(true)
    }

    const columns = [
        {
            title: "image",
            dataIndex: "thumbnail",
            render: (record) =>{
                return(
                    <Avatar icon={<Image alt='avtar' src={record}></Image>}/>
                )
            },
            key: "1"
        },
        {
            title: "title",
            dataIndex: "title",
            key: "1"
        },
        {
            title: "brand",
            dataIndex: "brand",
            key: "2"
        },
        {
            title: "stock",
            dataIndex: "stock",
            key: "3",
            
        },
        {
            title: "price",
            dataIndex: "price",
            key: "4"
        },
        {
            title: "actions",
            dataIndex: "actions",
            render:(record) => {
                return(
                    <DeleteOutlined onClick={() => Delete(record)}/>
                )
            },
            key: "5"
        }
    ]

    const Delete = (record) =>{
        dispatch(deleteCart(record))
    }
  return (
    <div>
        <Badge count={cart.length}>
            <Avatar shape='square' size={40} icon={<ShoppingCartOutlined className='icons' onClick={Open}/>} />
        </Badge>
        
        <Modal 
        width="1000px"
        title = {<ShoppingCartOutlined/>}
        open={draweropen} 
        onOk={() => setDrawerOpen(false)}
        onCancel={() => setDrawerOpen(false)}>
            <Table
            dataSource={cart}
            columns={columns}
            >
                
            </Table>
        </Modal>
    </div>
  )
}

export default Cart