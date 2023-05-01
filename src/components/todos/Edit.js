import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Modal, Select } from 'antd'
import React, { useState } from 'react'

const Edit = ({item}) => {
    const [openModal, setOpenModal] = useState(false)
    const Edit = () =>{
        setOpenModal(true)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    const updateTodo = (value) =>{
        console.log(`selected ${value}`);
        updateTodo(value, item.id)
        .then(res =>{
             console.log(res.data)
        }).catch(error =>{
            console.log(error)
        })
    }
  return (
    <div>
       <Button onClick={Edit(item)}><EditOutlined/></Button>
       <Modal
       open={openModal}
       onOk={() =>{
        setOpenModal(false)
       }}
       onCancel={() =>{
        setOpenModal(false)
       }}
       >
        <Form onFinish={updateTodo}>
            <Form.Item>
                <Select 
                options={[
                    {value: "true", label: "completed"},
                    {value: "false", label: "pending"}
                ]}
                onChange={handleChange}/>
            </Form.Item>
            <Button  type='primary' htmlType='submit'>Edit</Button>
        </Form>
       </Modal>
    </div>
  )
}

export default Edit