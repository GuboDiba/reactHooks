import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Products = ()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        (async ()=>{
            await getProducts();
        })();
    },[])
    const getProducts = async() =>{
        try{
            const response = await  fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    <h1>Our Products</h1>
    return (
    <div>   <Link to={"/login"}>
    <button className="addproduct">Add Product</button>  </Link>
    <div className="Products">
        <br/>
        {products.map(item=>(
            <div key={item.id} className="productdiv">
               <img id="img" src={item.images[0]} alt=""/>
                <h3>{item.title}</h3>
                <p>Price:{item.price}</p>
                <p>Discount:{item.discountPercentage}%</p>
                </div>
        ))}
    </div>
    </div>
    )
}
export default Products;