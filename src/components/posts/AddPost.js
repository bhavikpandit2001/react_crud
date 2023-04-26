import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { addPost } from '../../API/Index';

const AddPost = () => {
    const [openmodel, setOpenModal] = useState(false);
    const Open = () =>{
        setOpenModal(true)
    }

    const Add = (value) =>{
        console.log("value",value)
        addPost(value)
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
            <Button onClick={Open} type='primary'>Add Post</Button>
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
                        <Form.Item label="userId" name= "userId">
                            <Input type='number' placeholder='enter userId'/>
                        </Form.Item>
                        <Button htmlType='submit' type='primary'>add</Button>
                    </Form>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default AddPost