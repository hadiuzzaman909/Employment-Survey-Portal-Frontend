const express = require('express');
const { createEmployee, updateEmployee, deleteEmployee, getEmployee, getAllEmployee,getEmployee2 } =require("../controllers/employeeController.js");

const router=express.Router();

//CREATE 
router.post("/", createEmployee);

//UPDATE
router.put("/:id", updateEmployee);

//DELETE
router.delete("/:id", deleteEmployee);

//GET
router.get("/:id",getEmployee);

// //GET
// router.get("/:id",getEmployee2);

//GET ALL
router.get("/", getAllEmployee);


module.exports=router;