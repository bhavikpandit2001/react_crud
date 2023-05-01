import React from 'react'
import "./navbar.css"
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const openMenu = (item) =>{
        navigate(item.key)
        console.log("menu clicked" , item.key);
    }
    return (
        <aside >
            <div className='nav-container'>
                <div className='logo'>
                    <h2>Management</h2>
                </div>
                <div className='navmenu'>
                    <Menu
                    onClick={openMenu}
                    mode="inline"
                    theme="dark"
                    items= {[
                        {
                            label: " products",
                            key: "/products",
                        },
                        {
                            label: "users",
                            key: "/users"
                        },
                        {
                            label: "posts",
                            key: "/posts"
                        },
                        {
                            label: "todos",
                            key: "/todos"
                        },
                        {
                            label: "quotes",
                            key: "/quotes"
                        }
                    ]}
                    >
                    </Menu>
                </div>
            </div>
        </aside>
    )
}

export default Navbar