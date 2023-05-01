import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { addProduct } from '../../API/Index';

const AddProducts = () => {
    const [openmodel, setOpenModal] = useState(false);
    const Open = () =>{
        setOpenModal(true)
    }

    const Add = (value) =>{
        console.log("value",value)
        addProduct(value)
        .then(res =>{
            console.log(res.data)
            setOpenModal(false)
        }).catch(error =>{
            console.log(error)
        })
    }
  return (
    <div>
        <div>
            <Button style={{height: "50px", borderRadius: "10px"}} onClick={Open} type='primary'>Add Product</Button>
        </div>
        <Modal
        open={openmodel}
        onCancel = {() =>{
            setOpenModal(false)
        }}
        onOk = {() =>{
            setOpenModal(false)
        }}
        >
            <div>
                <div style={{padding: "20px"}}>
                    <Form onFinish={Add}>
                        <Form.Item label="title" name= "title">
                            <Input type='text' placeholder='enter title'/>
                        </Form.Item>
                        <Button htmlType='submit' type='primary'>add</Button>
                    </Form>
                </div>
            </div>

        </Modal>
    </div>
  )
}

export default AddProducts