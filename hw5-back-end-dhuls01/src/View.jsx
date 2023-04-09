import React,{useState,useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import axios  from 'axios';


const View =()=> {
    const[user, setuser]=useState({})
    const {id} = useParams();
    
   useEffect(()=>{
    if (id) {
        getCustomerUser(id)
    }
   }, [id])
   const getCustomerUser = async(id)=>{
    const response = await axios.get(`http://localhost:5000/singleuser/${id}`);
    if (response.status===200) {
        setuser(...response.data)
    }

}
   
    
    
        return (
            <div>
                
                <div style={{marginTop: "150px"}}>
                    <div className="card">
                        <div className="card-header">
                        <h1>View Customer details</h1>
                        </div>
                        <div className="container">
                            <strong>ID:</strong>
                            <strong>{user?.id}</strong>
                            <br />
                            <strong>fname:</strong>
                            <strong>{user?.fname}</strong>
                            <br />
                            <strong>sname:</strong>
                            <strong>{user?.sname}</strong>
                            <br />
                            <strong>Email:</strong>
                            <strong>{user.email}</strong>
                            <br />
                            <strong>Phone:</strong>
                            <strong>{user?.phonenumber}</strong>
                            <br />
                            <strong>city:</strong>
                            <strong>{user?.country}</strong>
                            <br />
                            <strong>{user?.city}</strong>
                            <br />
                            <Link to="/">
                                <button>go home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default View;