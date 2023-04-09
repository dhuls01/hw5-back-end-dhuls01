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
                            <th style={{textAlign: "center"}}>s.no</th>
                            <th style={{textAlign: "center"}}>Fname</th>
                            <th style={{textAlign: "center"}}>Sname</th>
                            <th style={{textAlign: "center"}}>phone</th>
                            <th style={{textAlign: "center"}}>country</th>
                            <th style={{textAlign: "center"}}>city</th>
                            <th style={{textAlign: "center"}}>email</th>
                            <th style={{textAlign: "center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index)=>{
                                return (
                                    <tr key ={index}>
                                        <th scope='row'>{index+1}</th>
                                        <td>{item.fname}</td>
                                        <td>{item.sname}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.email}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <td><Link to={`/update/${item.id}`}>
                                            <button className='btn btnSuccess'>Edit</button>
                                        </Link></td>
                                        <td><Link to={`/user/${item.id}`}>
                                            <button className='btn btnSuccess'onClick={()=>onDeleteCustomerUser(item.id)}>Delete</button>
                                        </Link></td>
                                        <td><Link to={`/view/${item.id}`}>
                                            <button className='btn btnSuccess'>View</button>
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