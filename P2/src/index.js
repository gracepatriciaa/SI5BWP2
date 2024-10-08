const express = require('express');
const app = (express);
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello Word");
});

app.get('/about',(req,res)=>{
    res.send("Halaman tentang perusahaan");
});

app.get('/contact',(req,res)=>{
    res.send("Halaman contact");
});

app.use('*',(req,res)=>{
    res.status(404);
    res.send("404, Halaman tidak ditemukan");
});

app.listen(port, () => { 
    console.log('Example app listening on port 3000');
});