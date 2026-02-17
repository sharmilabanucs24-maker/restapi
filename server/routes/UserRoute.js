import express from "express";
import { create, getAllUsers, getUserById, update,deleteUser } from "../controller/Usercontroller.js";

const route=express.Router();
route.post("/user",create)
route.get("/users",getAllUsers)
route.get("/user/:id",getUserById)
route.delete("/delete/user/:id",deleteUser)
route.put("/update/user/:id",update)

export default route