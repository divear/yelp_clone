const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./db")

//middleware 

app.use(express.json())

app.use((req,res, next)=>{
    console.log("middleware just run");
    next()
});

//get all
app.get("/api/v1/restaurants", async(req, res)=>{
    try {
        const results = await db.query("SELECT * FROM restaurants");
        console.log(results);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        });
    } catch (error) {
        console.log(error);
    }
    
  
});
//get individual
app.get("/api/v1/restaurants/:id", async(req, res)=>{
    console.log(req.params.id);
    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
        console.log(results.rows[0]);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        })
    } catch (error) {
        console.log(error);
    }
   
});

//create
app.post("/api/v1/restaurants/", async(req, res)=>{
    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2, $3)",[req.body.name, req.body.location, reg.body.price_range]);
        console.log(req);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: "mcdonald offbrand meal"
            }
        })
    } catch (error) {
        console.log(error);
    }
    
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