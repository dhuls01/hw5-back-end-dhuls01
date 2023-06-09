import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const initialState ={
    fname:"",
    sname:"",
    phonenumber:"",
    email:"",
    country:"",
    city:""
}
const Register=()=>{
    const [state,setState] = useState(initialState);
   const {fname,sname,phonenumber,email,country,city}=state;
   const navigate =useNavigate;
   const addcustomer= async(data)=>{
    const response = await axios.post("http://localhost:5000/register",data);
    if (response.status===200) {
        toast.success(response.data)
    }
   };

   const updateUser= async(data, id)=>{
    const response = await axios.put(`http://localhost:5000/update/${id}`,data);
    if (response.status===200) {
        toast.success(response.data)
    }
   };

   const handleSubmit=(e)=>{
    e.preventDefault();
    if (!fname||!sname || !phonenumber || !email ||!country ||!city) {
      toast.error("you cannot submit empty form")  
    }else{ if (!id) {
        addcustomer(state);
        navigate('/');
        setTimeout(()=>navigate.push('/'),500)
        
    }else{
        updateUser(state,id)
        navigate('/');
    setTimeout(()=>navigate.push('/'),500)
    }
    
        
    }
    
   }
   const {id} = useParams();
   useEffect(()=>{
    if (id) {
        getSingecustomer(id);
    }
   }, [id])
   
   const getSingecustomer = async(id)=>{
        const response = await axios.get(`http://localhost:5000/singleuser/${id}`);
        if (response.status===200) {
            setState(response.data[0])
        }
    
}


   const handleInputChange=(e)=>{
    let { name, value} = e.target;
    setState({...state, [name]: value})
   };
return (
    <div className="Register">
        <div  style={{margin: "8rem 0 0 15rem"}}>
        <h2 style={{color:"#89023e"}}>REGISTER NEW CUSTOMER</h2>
        
        <form  onSubmit={handleSubmit} style={{backgroundColor: "#ffe5ec"}}>
            <div className='inputdiv' style={{ marginLeft: "1rem"}}>
            <label>First Name:</label>
            <input style={{marginLeft: "2rem"}} type="text" placeholder='Enter your first Name' id="fname" name="fname" required onChange={handleInputChange} value={fname}/>
            <label style={{ marginLeft: "0.2rem"}}>second  Name:</label>
            <input type="text" style={{ marginRight: "0.2rem"}} placeholder='Enter your Second Name' id="sname" name="sname" required onChange={handleInputChange} value={sname}/></div>
            <div className='inputdiv' style={{ marginLeft: "1rem"}}>
            <label>Phone number:</label>
            <input type="text" style={{paddingRight: "24.9rem", marginRight: "0.2rem"}} placeholder='Enter your Phone number' id="phonenumber" name="phonenumber" required onChange={handleInputChange} value={phonenumber}/></div>
            
            <div className='inputdiv' style={{ marginLeft: "1rem"}}><label>Email:</label>
            <input type="text" style={{paddingRight: "25rem", marginLeft: "4.4rem",marginRight: "0.2rem"}} placeholder='Enter your Email' name="email" id="email" required onChange={handleInputChange} value={email}/></div>
            <div className='inputdiv' style={{ marginLeft: "1rem"}}><label>Country:</label>
            <input type="text" style={{paddingRight: "25rem", marginLeft: "3.1rem", marginRight: "0.2rem"}} placeholder='Enter your Country' name="country" id="country" required onChange={handleInputChange} value={country}/></div>
            <div className='inputdiv' style={{ marginLeft: "1rem"}}><label>City:</label>
            <input type="text" style={{paddingRight: "25rem", marginLeft: "5rem", marginRight: "0.2rem"}} placeholder='Enter your City' name="city" id="city" required onChange={handleInputChange} value={city}/></div>
             <input type="submit" style={{paddingRight: "43.8rem",marginRight: "0.2rem", backgroundColor: "#89023e",marginLeft: "1rem", color: "#f4f3ee"}} value={id ? "update" : "Register"}/>
             
        </form>
        </div>
    </div>
)
}
export default Register;