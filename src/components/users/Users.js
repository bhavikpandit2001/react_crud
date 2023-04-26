import React, { useEffect } from 'react'
import { getAllUsers, searchUsers } from '../../API/Index'
import { Button, Image, Input, Typography } from 'antd'
import "./users.css"
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../../redux/users/userSlice'
import ViewUser from './viewUser'
import EditUser from './EditUser'
import AddUser from './AddUser'

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
                    {users.map((user) => (
                        <div className='card'>
                            <div className='card-layout'>
                                <Image src={user.image} />
                                <div style={{ fontSize: "20px" }}>
                                    <h4>{user.firstName} {user.maidenName} {user.lastName}</h4>
                                    <Typography.Text>{user.email}</Typography.Text>
                                    <Typography.Text>{user.username}</Typography.Text>
                                    <Typography.Text style={{ marginLeft: "10px" }}>{user.age}</Typography.Text>
                                    <div>
                                        <Typography.Text>{user.birthDate}</Typography.Text>
                                    </div>
                                    <div>
                                        <Typography.Text >{user.address.address}{user.address.city}</Typography.Text>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                        <div>
                                            <EditUser user={user} />
                                        </div>
                                        <div>
                                            <ViewUser user={user} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users