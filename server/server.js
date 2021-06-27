const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")

const db = require("./db")

//middleware 

app.use(cors())
app.use(express.json())

app.use((req,res, next)=>{
    console.log("middleware just run");
    next()
});

//get all
app.get("/api/v1/restaurants", async(req, res)=>{
    try {
        const results = await db.query("SELECT * FROM restaurants");
        
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
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2, $3) RETURNING *",[req.body.name, req.body.location, req.body.price_range]);
        
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch (error) {
        console.log(error);
    }
    
})

//update
app.put("/api/v1/restaurants/:id", async(req, res)=>{
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [req.body.name, req.body.location, req.body.price_range, req.params.id ]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
        
    } catch (error) {
        console.log(error);
    }
     
})

app.delete("/api/v1/restaurants/:id", async(req, res)=>{
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });
    } catch (error) {
        console.log(error);
    }
    
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});