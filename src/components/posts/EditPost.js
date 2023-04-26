import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { updatePost } from '../../API/Index'

const EditPost = ({post}) => {
  const [openmodal, setOpenModal] = useState(false)
  const Confirm = (value) => {
    console.log("confirm", post.id, value)
    updatePost(post.id, value)
    .then(res =>{
        console.log(res.data)
    }).catch(error =>{
        console.log(error)
    })
  }
  return (
    <div>
      <Button type='primary' onClick={() =>{
        setOpenModal(true)
      }}>Edit</Button>
      <Modal open={openmodal} onCancel={() =>{
        setOpenModal(false)
      }}
      onOk={() =>{
        setOpenModal(false)
      }}>
        <div style={{ padding: "20px" }}>
          <Form onFinish={Confirm}>
            <Form.Item label="title" name="title">
              <Input type='text' defaultValue={post.title}></Input>
            </Form.Item>
            <Button type='primary' htmlType='submit'>Edit</Button>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default EditPost