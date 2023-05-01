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
export const getProductsbyCategory = async(category) =>{
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
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

export const userCart = async(id) =>{
    return await axios.get(`https://dummyjson.com/users/${id}/carts`)
}

export const userPost = async(id) =>{
    return await axios.get(`https://dummyjson.com/users/${id}/posts`)
}

export const userTodo = async(id) =>{
    return await axios.get(`https://dummyjson.com/users/${id}/todos`)
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

export const getAllTodos = async() =>{
    return await axios.get(`https://dummyjson.com/todos`)
}

export const deleteTodo = async(id) =>{
    return await axios.delete(`https://dummyjson.com/todos/${id}`)
}
export const updateTodo = async(id, value) =>{
    let data =  {
        completed:value
    }
    return await axios.delete(`https://dummyjson.com/todos/${id}`, data)
}

export const getAllQuotes = async() =>{
    return await axios.get(`https://dummyjson.com/quotes`)
}