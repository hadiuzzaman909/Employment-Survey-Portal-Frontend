const express = require('express');
const { createSector,getAllSector } =require("../controllers/sectorController.js");

const router=express.Router();


//CREATE 
router.post("/", createSector);

//GET ALL
router.get("/", getAllSector);


module.exports=router;