import React,{useState} from "react";
import "./style.css";

const Login = () =>{
    const [username,setUsername]=useState('');
    const [password,setPassword]= useState('');
    // console.log(username);
    // console.log(password);

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const data={
            username:username,
            password:password

        }
        console.log({data});
        try{
            const response=await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers:{
                    'content-Type':'application/json',
                    // username:"atuny0",
                    // password:"9uQFF1Lh"
                },
                body:JSON.stringify(data)
                
            })
            const result=await response.json()
            console.log(result);
    
        }
        catch(error){
            console.log(error.message);
        }
    
        }


     
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input placeholder="Enter Username" type="text"
            onChange={(e)=>setUsername(e.target.value)}/>
            
            <br/>
            <br/>
            <input placeholder="Enter Password" type="password"
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;