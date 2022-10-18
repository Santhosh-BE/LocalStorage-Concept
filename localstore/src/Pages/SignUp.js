import React, { useState } from "react";
import './SignUp.css'

function SignUp(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirm,setConfirm]=useState("");

//     const handlechange=(e)=>{
//    setName(e.target.value);
//     }

    const handleclick=()=>{
        console.log(name,email,password,confirm)
        localStorage.setItem("Username",name);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        localStorage.setItem("confirm Password",confirm);
    }

    return(
        <>
            <div><input type="text" placeholder="Enter Username" value={name} onChange={(e)=>setName(e.target.value)} /></div>
            <div> <input type="text" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
            <div> <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
            <div> <input type="password" placeholder="Enter Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/></div>
            <div><button onClick={handleclick}>SignUp</button></div>
        </>
    )
}
export default SignUp;