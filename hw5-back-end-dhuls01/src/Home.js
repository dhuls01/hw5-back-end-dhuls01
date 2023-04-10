import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



const Home =()=> {
    const [data, setData]=useState([]);
    useEffect(()=>{
        getCustomerUsers();
    },[])
    const getCustomerUsers= async(data)=>{
        const response = await axios.get("http://localhost:5000/users",data);
        if (response.status===200) {
            setData(response.data);
            toast.success(response.data);
        }
    }
    const onDeleteCustomerUser =async(id)=>{
        if (window.confirm("you are about to delete user. are you sure you want to delete?")) {
            const response = await axios.delete(`http://localhost:5000/user/${id}`);
            if (response.status===200) {
                toast.success(response.data);
                getCustomerUsers()
            }
        }
    }
    console.log("data=>", data);
        return (
            <div style={{marginTop: "150px"}}>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center", color:"#89023e"}}>s.no</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>Fname</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>Sname</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>phone</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>country</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>city</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>email</th>
                            <th style={{textAlign: "center", color:"#89023e"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index)=>{
                                return (
                                    <tr key ={index}>
                                        <th style={{color:"#89023e"}} scope='row'>{index+1}</th>
                                        <td style={{color:"#89023e"}}>{item.fname}</td>
                                        <td style={{color:"#89023e"}}>{item.sname}</td>
                                        <td style={{color:"#89023e"}}>{item.phonenumber}</td>
                                        <td style={{color:"#89023e"}}>{item.email}</td>
                                        <td style={{color:"#89023e"}}>{item.country}</td>
                                        <td style={{color:"#89023e"}}>{item.city}</td>
                                        <td><Link to={`/update/${item.id}`} style={{color:"#89023e"}}>
                                            <button className='btn btnSuccess' style={{backgroundColor: "#89023e"}}>Edit</button>
                                        </Link></td>
                                        <td><Link to={`/user/${item.id}`} style={{color:"#89023e"}}>
                                            <button className='btn btnSuccess'onClick={()=>onDeleteCustomerUser(item.id)} style={{backgroundColor:"#073b4c"}}>Delete</button>
                                        </Link></td>
                                        <td><Link to={`/view/${item.id}`} style={{color:"#89023e"}}>
                                            <button className='btn btnSuccess' style={{backgroundColor:"#2a9d8f"}}>View</button>
                                        </Link></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                
            </div>
        );
    
}


export default Home;