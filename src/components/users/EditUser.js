import { EditFilled } from '@ant-design/icons'
import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { updateUser } from '../../API/Index'

const EditUser = ({ user }) => {
  const [openmodal, setOpenModal] = useState(false)

  const Confirm = (value) => {
    console.log("confirm", user.id, value)
    updateUser(user.id, value)
      .then(res => {
        setOpenModal(false)
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <EditFilled type='primary' onClick={() => {
        setOpenModal(true)
      }}/>
      <Modal open={openmodal} onCancel={() => {
        setOpenModal(false)
      }}
        onOk={() => {
          setOpenModal(false)
        }}>
        <div style={{ padding: "20px" }}>
          <Form onFinish={Confirm}>
            <Form.Item label="title" name="title">
              <Input type='text' defaultValue={user.lastName}></Input>
            </Form.Item>
            <Button type='primary' htmlType='submit'>Edit</Button>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default EditUser