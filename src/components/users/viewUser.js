import { CrownFilled, FullscreenOutlined, GlobalOutlined, MailOutlined, PhoneFilled, UserOutlined } from '@ant-design/icons'
import { Button, Image, Modal, Typography } from 'antd'
import React, { useState } from 'react'
import UserCart from './UserCart'
import UserPost from './UserPost'
import UserTodo from './UserTodo'
import "./viewuser.css"
const ViewUser = ({ user }) => {
    const [openmodal, setOpenModal] = useState(false)
    return (
        <div>
            <FullscreenOutlined type='primary' onClick={() => {
                setOpenModal(true)
            }}/>
            <Modal
                width={900}
                open={openmodal}
                onCancel={() => {
                    setOpenModal(false)
                }}
                onOk={() => {
                    setOpenModal(false)
                }}>
                <div className='main-modal'>
                    <div className='sub-div'>
                        <div className='left'>
                            <Image src={user.image} />
                        </div>
                        <div className='right'>
                            <div className='name'>
                                <Typography.Title level={2}><UserOutlined/> {user.firstName} {user.maidenName} {user.lastName}</Typography.Title>
                                <Typography.Title type='secondary' level={3}><UserOutlined/> {user.username}</Typography.Title>
                                <Typography.Title type='secondary' level={3}><MailOutlined/> {user.email}</Typography.Title>
                            </div>
                            <div className='other'>
                                <div style={{fontSize: "20px"}}>
                                    <CrownFilled /> {user.birthDate}
                                </div>
                                <div style={{fontSize: "20px"}}>
                                    <PhoneFilled/> {user.phone}
                                </div>
                            </div>
                            <div style={{margin: "10px 0  20px 0",fontSize: "20px"}}>
                                {/* <GlobalOutlined/> {user.address.address}, {user.address.city},({user.address.postalCode}) */}
                            </div>
                            <div className='userlinks'>
                                <div>
                                    <UserCart cart ={user}/>
                                </div>
                                <div>
                                    <UserPost post = {user}/>
                                </div>
                                <div>
                                    <UserTodo todos = {user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ViewUser