import React,{useState,useEffect} from "react";
import "./style.css"
const ProductsDetails = ()=>{
    const [products,setProductsdetails]=useState([]);
    useEffect(()=>{
        (async ()=>{
            await getProductsdetails();
        })();
    },[])
    const getProductsdetails = async() =>{
        try{
            const response = await  fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProductsdetails(result.products)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    <h1>Details of Products</h1>
    return (
    <div className="Products">
        {products.map(item=>(
            <div key={item.id}>
               {/* <img id="images" src={item.images[0]}/> */}
                <h3>{item.title}</h3>
                <p>Price:{item.price}</p>
                <p>Discount:{item.discountPercentage}%</p>
                </div>
        ))}
    </div>
    )
}
export default ProductsDetails;