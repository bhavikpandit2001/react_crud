import { InboxOutlined, SmileOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Modal, Table, Tag, Typography } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userPost } from '../../API/Index'
import { setUserPosts } from '../../redux/users/userDataSlice'

const UserPost = ({ post }) => {
    const [openmodal, setOpenModal] = useState(false)
    const dispatch = useDispatch();
    const userpost = useSelector((state => state.userdata.postlist))

    const ViewCart = () => {
        setOpenModal(true)
        userPost(post.id)
            .then(res => {
                console.log(res.data.posts)
                dispatch(setUserPosts(res.data.posts))
            }).catch(error => {
                console.log(error)
            })
    }
    const columns = [
        {
            title: "title",
            dataIndex: "title",
            key: "1"
        },
        {
            title: "body",
            dataIndex: "body",
            render: (record) => {
                return (
                    <Typography.Paragraph >{record}</Typography.Paragraph>
                )
            },
            key: "2"
        },
        {
            title: "tags",
            dataIndex: "tags",
            render: (record) => {
                return (
                    <>
                        <Tag color="magenta">{record[0]}</Tag>
                        <Tag color="red">{record[1]}</Tag>
                        <Tag color="volcano">{record[2]}</Tag>
                    </>
                )
            },
            key: "3"
        },
        {
            title: "reactions",
            dataIndex: "reactions",
            render: (record) => {
                return (
                    <Badge count={record}>
                        <Avatar shape="circle" size="large" icon={<SmileOutlined />} />
                    </Badge>
                )
            },
            key: "4"
        }
    ]
    return (
        <div>
            <Button type='primary' onClick={ViewCart}><InboxOutlined /> user post</Button>
            <Modal
            centered
                width={900}
                open={openmodal}
                onOk={() => {
                    setOpenModal(true)
                }}
                onCancel={() => {
                    setOpenModal(false)
                }}
            >
                <div>
                    <div style={{ padding: "10px" }}>
                        <Table
                            dataSource={userpost}
                            columns={columns}
                        ></Table>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserPost