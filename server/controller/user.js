import { v4 as uuid } from "uuid";
let userCustomers = [];
export const getCustomerUsers = (req, res)=>{
    res.send(userCustomers)
}
export const createUserCustomer=(req,res)=>{
    const userCustomer = req.body;
    userCustomers.push({...userCustomer, id: uuid()});
    res.send('customer added succefully');

}
export const getCustomerUser=(req,res)=>{
    const getsingleuser=userCustomers.filter((userCustomer)=>userCustomer.id===req.params.id);
    res.send(getsingleuser);
}
export const deleteCustomerUser=(req,res)=>{
    userCustomers=userCustomers.filter((userCustomer)=>userCustomer.id!==req.params.id);
    res.send("user removed succefully");
}
export const updateCustomerUser=(req, res)=>{
    const userCustomer=userCustomers.find((userCustomer)=>userCustomer.id===req.params.id);
    userCustomer.name = req.body.name;
    userCustomer.email=req.body.email;
    userCustomer.phone =req.body.phone;
    res.send("update successfully")
}
