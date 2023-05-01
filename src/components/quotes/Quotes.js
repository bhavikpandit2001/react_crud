import { DeleteOutlined } from '@ant-design/icons'
import { Table, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuotes } from '../../API/Index'
import { setQuotes } from '../../redux/quotes/quoteSlice'

const Quotes = () => {
    const dispatch = useDispatch()
    const quotes = useSelector((state) => state.quotes.list)
    useEffect(() =>{
        getAllQuotes()
        .then(res =>{
            console.log(res.data.quotes)
            dispatch(setQuotes(res.data.quotes))
        })
    },[])
    const columns = [
        {
            title: "quote",
            dataIndex: "quote",
            key: "1"
        },
        {
            title: "author",
            dataIndex: "author",
            key: "2"
        },
        {
            title: "actions",
            render: (record) => {
                return (
                    <>
                        <DeleteOutlined onClick={() => Delete(record)} style={{ color: "red" }} />
                    </>
                )
            }
        }
    ]

    const Delete = (record) =>{
        console.log("record", record)
    }
    return (
        <div className='quotes'>
            <div className='main-div'>
                <Table
                    dataSource={quotes}
                    columns={columns}
                ></Table>
            </div>

        </div>
    )
}

export default Quotes