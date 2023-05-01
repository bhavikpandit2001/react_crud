import React, { useEffect } from 'react'
import "./products.css"
import { getAllProducts, getProductsbyCategory, searchProducts } from '../../API/Index'
import { Image, Input, Menu, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/products/productSlice'
import ViewProduct from './ViewProduct'
import EditProducts from './EditProducts'
import AddProducts from './AddProducts'
import { useParams } from 'react-router-dom'

import CartBtn from './CartBtn'
const Products = () => {
    const {categoryId} = useParams()
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list)
    console.log("products", products)
    useEffect(() => {
        (categoryId ? getProductsbyCategory() : getAllProducts())
            .then(res => {
                console.log("products", res.data.products)
                dispatch(setProducts(res.data.products))
               
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const Search = (value) =>{
        console.log("search value", value)
        searchProducts(value)
        .then(res =>{
            console.log(res.data.products)
            dispatch(setProducts(res.data.products))
        }).catch(error =>{
            console.log(error)
        })
    }
    console.log(products)
    return (
        <div className='products'>
            <div className='main-div'>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Input style={{width: "30%", height: "50px",borderRadius: "10px"}} type='search' placeholder='please type text to search' value={products.search} onChange={e => Search(e.target.value)}/>
                        
                        <AddProducts />
                </div>
                <div className='cards'>
                    {products.map(product => (
                        <div className='card'>
                            <div className='card-layout'>
                                <Image src={product.thumbnail} />
                                <div style={{ fontSize: "20px" }}>
                                    <h4>{product.title}</h4>
                                    <Typography.Text>Price: ${product.price}</Typography.Text>
                                    <Typography.Text style={{ marginLeft: "10px" }} delete disabled> ${Math.floor(product.price / product.discountPercentage * 100)}</Typography.Text>
                                    <div>
                                        <Typography.Text>{product.brand}</Typography.Text>
                                    </div>
                                    <div>
                                        <Typography.Text >{product.description}</Typography.Text>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                        <div>
                                            <EditProducts item={product} />
                                        </div>
                                        <div>
                                            <ViewProduct item={product} />
                                        </div>
                                        <div>
                                            <CartBtn item={product}/>
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

export default Products