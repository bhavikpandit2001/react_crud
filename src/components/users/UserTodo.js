import { DatabaseOutlined } from '@ant-design/icons'
import { Button, Modal, Table, Tag } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userTodo } from '../../API/Index'
import { setUserTodos } from '../../redux/users/userDataSlice'

const UserTodo = ({todos}) => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const usertodos =  useSelector((state) => state.userdata.todolist)
    
    const ViewTodos = () =>{
        setOpenModal(true)
        userTodo(todos.id)
        .then(res =>{
            console.log(res.data.todos)
            dispatch(setUserTodos(res.data.todos))
        }).catch(error =>{
            console.log(error)
        })
    }
    const columns = [
        {
            title: "todo",
            dataIndex: "todo",
            key: "1"
        },
        {
            title: "completed",
            dataIndex: "completed",
            render: (completed) =>{
                return(
                    <div>{completed ? 
                        <Tag color="success">{"completed"}</Tag>
                        : <Tag color="magenta">{"pending"}</Tag>}
                        </div>
                )
            },
            key: "2"
        }
    ]
  return (
    <div>
        <Button type='primary' onClick={ViewTodos}><DatabaseOutlined/> user todos</Button>
        <Modal 
        open={openModal}
        onOk = {() =>{
            setOpenModal(false)
        }}
        onCancel = {() =>{
            setOpenModal(false)
        }}
        >
            <div>
                <div>
                    <Table
                    dataSource={usertodos}
                    columns= {columns}
                    ></Table>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default UserTodo