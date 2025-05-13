const Sector=require("../models/sector.js");


const createSector=async (req,res,next)=>{
    const newSector=new Sector(req.body)

    try{
        const savedSector=await newSector.save()
        res.status(200).json(savedSector)
    }catch(err){
       next(err);
    }
} 



const getAllSector=async (req,res,next)=>{
    const sector=req.query;
    try{
        const newSector=await Sector.find(sector);
        res.status(200).json(newSector);
    }
    catch(err){
        next(err);
    }
}

module.exports =  {
    createSector,
    getAllSector
};