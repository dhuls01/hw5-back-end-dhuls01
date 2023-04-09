import express from "express";
import { getCustomerUsers, createUserCustomer, getCustomerUser,deleteCustomerUser, updateCustomerUser } from "../controller/user.js";
const router = express.Router();
router.get('/users', getCustomerUsers);
router.post('/register', createUserCustomer);
router.get('/singleuser/:id', getCustomerUser);
router.delete('/user/:id', deleteCustomerUser)
router.put('/update/:id', updateCustomerUser)
export default router;