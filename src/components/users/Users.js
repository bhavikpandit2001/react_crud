import React, { useEffect } from 'react'
import { getAllUsers, searchUsers } from '../../API/Index'
import { Avatar, Image, Input, Table, Typography } from 'antd'
import "./users.css"
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../redux/users/userSlice'
import ViewUser from './viewUser'
import EditUser from './EditUser'
import AddUser from './AddUser'
import { ProfileOutlined, UserOutlined } from '@ant-design/icons'

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.list)
    useEffect(() => {
        getAllUsers()
            .then(res => {
                console.log(res.data.users)
                dispatch(setUsers(res.data.users))
            }).catch(error => [
                console.log(error)
            ])
    }, [])
    const Search = (value) => {
        console.log("search value", value)
        searchUsers(value)
            .then(res => {
                console.log(res.data.users)
                dispatch(setUsers(res.data.users))
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='users'>
            <div className='main-div'>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Input style={{ width: "30%" }} type='search' placeholder='please type text to search' value={users.search} onChange={e => Search(e.target.value)} />
                    <AddUser />
                </div>
                <div className='cards'>
                    {users.map(user => {
                        return (
                            <div className='card'>
                                <div style={{ padding: "20px" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Avatar size={100} icon={<Image src={user.image}></Image>}></Avatar>
                                    </div>
                                    <div>
                                        <Typography.Title level={4}><UserOutlined /> {user.firstName} {user.maidenName} {user.lastName}</Typography.Title>
                                        <Typography.Title level={5}><ProfileOutlined /> {user.username}</Typography.Title>
                                        <Typography.Title level={5}><ProfileOutlined /> {user.email}</Typography.Title>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <EditUser user={user} />
                                        <ViewUser user={user} />
                                    </div>
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default Users