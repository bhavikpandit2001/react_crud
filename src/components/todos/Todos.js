import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Table, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getAllTodos } from '../../API/Index'
import { setTodos } from '../../redux/todos/todoSlice'
import Edit from './Edit'
import "./todos.css"


const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.list)
    useEffect(() => {
        getAllTodos()
            .then(res => {
                console.log(res.data.todos)
                dispatch(setTodos(res.data.todos))
            })
    }, [])

    const columns = [
        {
            title: "todo",
            dataIndex: "todo",
            key: "1"
        },
        {
            title: "status",
            dataIndex: "completed",
            render: (completed) => {
                return (
                    <div>{completed ? 
                    <Tag color="success">{"completed"}</Tag>
                    : <Tag color="magenta">{"pending"}</Tag>}
                    </div>
                )
            },
            key: "2"
        },
        {
            title: "actions",
            
            render: (record) =>{
                return(
                    <>
                    {/* <Edit item={record}/> */}
                  <DeleteOutlined style={{color: "red"}} onClick={() =>{Delete(record)}}/> </>
                )
            }
        }
    ]

    const Delete = (record) =>{
        console.log("deleted todo", record.id)
        deleteTodo(record.id)
        .then(res =>{
            console.log(res.data)
        }).catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className='todos'>
            <div className='main-div'>
                <Table
                    dataSource={todos}
                    columns={columns}
                ></Table>
            </div>

        </div>
    )
}

export default Todos