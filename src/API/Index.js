import axios from "axios"

export const Login = async(value) =>{
    const data = {
        username: value.username,
        password: value.password
    }
    return await axios.post(`https://dummyjson.com/auth/login`,data)
}

export const getAllProducts = async() =>{
    return await axios.get(`https://dummyjson.com/products`)
}
export const searchProducts = async(value) =>{
    return await axios.get(`https://dummyjson.com/products/search?q=${value}`)
}
export const addProduct = async(value) =>{
    return await axios.post(`https://dummyjson.com/products/add`, value)
}
export const updateProduct = async(value, id) =>{
    console.log("confirm", "id:", id, "title:", value)
    return await axios.put(`https://dummyjson.com/products/${value}`, id)
}
export const getAllUsers = async() =>{
    return await axios.get(`https://dummyjson.com/users`)
}
export const searchUsers = async(value) =>{
    return await axios.get(`https://dummyjson.com/users/search?q=${value}`)
}
export const updateUser = async(value, id) =>{
    console.log("confirm", "id:", id, "title:", value)
    return await axios.put(`https://dummyjson.com/users/${value}`, id)
}
export const addUser = async(value) =>{
    return await axios.post(`https://dummyjson.com/users/add`, value)
}
export const getAllPosts = async() =>{
    return await axios.get(`https://dummyjson.com/posts`)
}
export const searchPosts = async(value) =>{
    return await axios.get(`https://dummyjson.com/posts/search?q=${value}`)
}
export const updatePost = async(value, id) =>{
    console.log("confirm", "id:", id, "title:", value)
    return await axios.put(`https://dummyjson.com/posts/${value}`, id)
}
export const addPost = async(value) =>{
    
    return await axios.post(`https://dummyjson.com/posts/add`, value)
}