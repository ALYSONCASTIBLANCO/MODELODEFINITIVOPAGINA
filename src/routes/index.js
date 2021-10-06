const express=require('express');
const router=express.Router();
const Task=require('../models/task');
router.get('/',async (req,res)=>{
    const tasks=await Task.find();
    console.log(tasks);
    res.render('Mayoreo', {tasks});
});

router.get('/top-ventas',async (req,res)=>{
    const tasks=await Task.find();
    console.log(tasks);
    res.render('TopVentas', {tasks});
});

router.get('/categoria-hogar',async (req,res)=>{
    const tasks=await Task.find({"category":"Hogar"});
    console.log(tasks);
    res.render('HogarYCotidiano', {tasks});
});

router.get('/categoria-belleza',async (req,res)=>{
    const tasks=await Task.find({"category":"Belleza"});
    console.log(tasks);
    res.render('Belleza', {tasks});
});

router.get('/categoria-audio',async (req,res)=>{
    const tasks=await Task.find({"category":"Audio"});
    console.log(tasks);
    res.render('AudioYVideo', {tasks});
});

router.get('/categoria-luces',async (req,res)=>{
    const tasks=await Task.find({"category":"Luces"});
    console.log(tasks);
    res.render('Linternasyluces', {tasks});
});

router.get('/opiniones',async (req,res)=>{
    res.render('Opiniones');
});

router.get('/carrito',async (req,res)=>{
    res.render('Carrito');
});

router.get('/stock',async (req,res)=>{
    res.render('Stock');
});
module.exports=router;
