import React,{ useEffect,useState}  from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ()=> {
    const [activatet, setactivet]=useState("Home")
    const location =useLocation();
    useEffect(()=>{
        if (location.pathname==="/") {
            setactivet("Home")
        }else if(location.pathname==="/register"){
            setactivet("Register")
        }else if(location.pathname==="/view"){
            setactivet("View");
        }
    }, [location])
     
        return (
            <div className='Header'>
                <h4 className='logo'> Customer Management System</h4>
                <div className='header header-right '>
                
                    <Link to="/">
                    <p className={`${activatet==="Register" ? "ative": ""}`} onClick={()=>setactivet("Home")}>Home</p>
                    </Link>
                    <Link to="/register">
                        <p className={`${activatet==="Register" ? "ative": ""}`} onClick={()=>setactivet("Register")}>Add customer</p>
                    </Link>

                </div>
            </div>
        );
    
}



export default Header;