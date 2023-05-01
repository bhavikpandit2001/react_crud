import { Button, Form, Input, Typography } from 'antd'
import React, { useEffect } from 'react'
import "./auth.css"
import { Login } from '../API/Index'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/auth/authSlice'

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Confirm = (value) => {
        
        Login(value)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("user-token", res.data.token)
                dispatch(login(value))
                navigate("/")
            }).catch(error => {
                console.log(error)
            })
        console.log(value)
    }

    useEffect(() =>{
        let data = localStorage.getItem("user-token")
        data ? dispatch(login(data)) : dispatch(logout())
    },[])

    return (
        <div className='login'>
            <Typography.Title>Login</Typography.Title>
            <Form onFinish={Confirm}>
                <Form.Item label="username" name="username" rules={[{ required: true, message: 'Please enter valid username' }]}>
                    <Input placeholder='enter your username' />
                </Form.Item>
                <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please enter valid Password!' }]}>
                    <Input.Password placeholder='enter your password' />
                </Form.Item>
                <Button style={{ width: "100%" }} type='primary' htmlType='submit'>login</Button>
            </Form>
        </div>
    )
}

export default Auth