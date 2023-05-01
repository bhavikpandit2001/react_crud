import React, { useEffect } from 'react'
import { getAllPosts, searchPosts } from '../../API/Index';
import { Avatar, Badge, Input, Tag, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../redux/posts/postSlice';
import ViewPost from './ViewPost';
import EditPost from './EditPost';
import AddPost from './AddPost';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts.list)
    useEffect(() => {
        getAllPosts()
            .then(res => {
                console.log(res.data.posts)
                dispatch(setPosts(res.data.posts))
            }).catch(error => {
                console.log(error)
            })
    }, [])
    const Search = (value) =>{
        console.log("search value", value)
        searchPosts(value)
        .then(res =>{
            console.log(res.data.posts)
            dispatch(setPosts(res.data.posts))
        }).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='posts'>
            <div className='main-div'>
            <div style={{display: "flex", justifyContent: "space-between"}}> 
                        <Input style={{width: "30%"}} type='search' placeholder='please type text to search' value={posts.search} onChange={e => Search(e.target.value)}/>
                        <AddPost />
                </div>
                <div className='cards'>
                    {posts.map(post => (
                        <div className='card'>
                            <div className='card-layout'>
                                <div style={{ fontSize: "20px" }}>
                                    <h4>{post.title}</h4>
                                    <Typography.Paragraph ellipsis={{rows: 2, expandable: true,}}>{post.body}</Typography.Paragraph>
                                    <Tag color="magenta">{post.tags[0]}</Tag>
                                    <Tag color="red">{post.tags[1]}</Tag>
                                    <Tag color="volcano">{post.tags[2]}</Tag>
                                    <div style={{margin: "30px 0"}}>
                                        <Badge count={post.reactions}>
                                            <Avatar shape="circle" size="large" icon={<SmileOutlined/>}/>
                                        </Badge>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                        <div>
                                            <EditPost post = {post}/>
                                        </div>
                                        <div>
                                            <ViewPost post = {post}/>
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

export default Posts