import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react'
import { addUser } from '../../API/Index';

const AddUser = () => {
    const [openmodel, setOpenModal] = useState(false);
    const Open = () =>{
        setOpenModal(true)
    }
    const Add = (value) =>{
        console.log("value",value)
        addUser(value)
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
            <Button onClick={Open} type='primary'>Add user</Button>
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
                        <Form.Item label="firstName" name= "firstName">
                            <Input type='text' placeholder='enter firstName'/>
                        </Form.Item>
                        <Form.Item label="lastName" name= "lastName">
                            <Input type='text' placeholder='enter lastName'/>
                        </Form.Item>
                        <Form.Item label="age" name= "age">
                            <Input type='number' placeholder='enter age'/>
                        </Form.Item>
                        <Button htmlType='submit' type='primary'>add</Button>
                    </Form>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default AddUser