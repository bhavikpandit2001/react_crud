import { Button, Modal, Typography } from 'antd'
import React, { useState } from 'react'

const ViewUser = ({ user }) => {
    const [openmodal, setOpenModal] = useState(false)
    return (
        <div>
            <Button type='primary' onClick={() => {
                setOpenModal(true)
            }}>View User</Button>
            <Modal open={openmodal} onCancel={() => {
                setOpenModal(false)
            }}
                onOk={() => {
                    setOpenModal(false)
                }}>
                <div class="box">
                    <div class="boxlayout">
                        <div class="profile">
                            <div>
                                <img src={user.image} alt="profile pic" />
                            </div>
                            <div class="media">
                                <div class="videos">
                                    <h4>age</h4>
                                    <p>{user.age}</p>
                                </div>
                                <div class="views">
                                    <h4>weight</h4>
                                    <p>{user.weight}</p>
                                </div>
                            </div>
                        </div>
                        <div class="name">
                            <h3>{user.firstName} {user.maidenName} {user.lastName}</h3>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <div class="rating">
                                <p>contact : {user.phone}</p>
                                <p>gender : {user.gender}</p>
                                <p>birthdate : {user.birthDate}</p>
                            </div>
                        </div>
                        <div class="counts">
                            <div class="tag">
                                <Typography.Paragraph style={{ color: "rgba(43, 123, 123, 1)" }}>address:</Typography.Paragraph>
                                <Typography.Paragraph style={{ color: "rgba(255, 98, 92, 1)" }}>city</Typography.Paragraph>
                                <Typography.Paragraph style={{ color: "rgba(83, 78, 186, 1)" }}>postal code</Typography.Paragraph>
                                <Typography.Paragraph style={{ color: "red" }}>district</Typography.Paragraph>
                            </div>
                            <div class="countname">
                                <Typography.Paragraph ellipsis={{
                                    rows: 1, expandable: true, symbol: "more"
                                }}>{user.address.address}</Typography.Paragraph>
                                <Typography.Paragraph ellipsis={{
                                    rows: 1, expandable: true, symbol: "more"
                                }}>{user.address.city}</Typography.Paragraph>
                                <Typography.Paragraph ellipsis={{
                                    rows: 1, expandable: true, symbol: "more"
                                }}>{user.address.postalCode}</Typography.Paragraph>
                                <Typography.Paragraph ellipsis={{
                                    rows: 1, expandable: true, symbol: "more"
                                }}>{user.address.state}</Typography.Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ViewUser