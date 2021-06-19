const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");


//middleware 

app.use(express.json())

app.use((req,res, next)=>{
    console.log("middleware just run");
    next()
});

//get all
app.get("/api/v1/restaurants", (req, res)=>{
    console.log("route handler ran");
    res.json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "KFC"]    
        }
    });
});
//get individual
app.get("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonald offbrand meal"
        }
    })
});

//create
app.post("/api/v1/restaurants/", (req, res)=>{
    console.log(req);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonald offbrand meal"
        }
    })
})

//update
app.put("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.params.id);
    res.status(200).json({
        status: "success",
    })  
})

app.delete("/api/v1/restaurants/:id", (req, res)=>{
    res.status(204).json({
        status: "success",
        data: {
            restaurant: "mcdonald offbrand meal"
        }
    }) 
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});