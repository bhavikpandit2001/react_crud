import { UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/auth/authSlice'
import "./header.css"
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const openMenu = (item) =>{
        navigate(item.key)
        dispatch(logout())
        console.log("menu clicked" , item.key);
    }
    return (
        <div className='header'>
            <div className='head-layout'>
                <div className='header-logo'>
                    <h2>CODA SHOP</h2>
                </div>
                <div className='account'>
                <Menu
                onClick={openMenu}
                mode="inline"
                theme="dark"
                items= {[
                    {
                        label: <UserOutlined/>,
                        children: [{
                            label: "logout",
                            key: "/login"
                        }]
                    },]}
                ></Menu>
                </div>
            </div>
        </div>
    )
}

export default Header