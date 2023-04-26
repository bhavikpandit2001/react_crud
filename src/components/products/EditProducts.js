
import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { updateProduct } from '../../API/Index'

const EditProducts = ({ item }) => {
    const [openmodal, setOpenModal] = useState(false)

    const Confirm = (value) => {
        console.log("confirm", item.id, value)
        updateProduct(item.id, value)
        .then(res =>{
            console.log(res.data)
        }).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <Button type='primary' onClick={() => {
                setOpenModal(true)
            }}>Edit </Button>
            <Modal open={openmodal} onCancel={() => {
                setOpenModal(false)
            }}
                onOk={() => {
                    setOpenModal(false)
                }}>
                <div>
                    <div style={{ padding: "20px" }}>
                        <Form onFinish={Confirm}>
                            <Form.Item label="title" name="title">
                                <Input type='text' defaultValue={item.title}></Input>
                            </Form.Item>
                            <Button type='primary' htmlType='submit'>Edit</Button>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditProducts