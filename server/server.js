const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")

const db = require("./db")

//middleware 

app.use(cors())
app.use(express.json())

app.use((req,res, next)=>{
    next()
});

//get all
app.get("/api/v1/restaurants", async(req, res)=>{
    try {
        //const results = await db.query("SELECT * FROM restaurants");
        const restaurantRatingsData = await db.query("select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;")
        console.log(restaurantRatingsData);
        
        res.json({
            status: "success",
            results: restaurantRatingsData.rows.length,
            data: {
                restaurants: restaurantRatingsData.rows
            }
        });
    } catch (error) {
        console.log(error);
    }
    
  
});
//get individual
app.get("/api/v1/restaurants/:id", async(req, res)=>{
    
    try {
        const results = await db.query("select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1", [req.params.id]);

        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id]);

        console.log(reviews);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
                reviews: reviews.rows,
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

//delete
app.delete("/api/v1/restaurants/:id", async(req, res)=>{
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status: "success",
        });
    } catch (error) {
        console.log(error);
    }  
});

app.post("/api/v1/restaurants/:id/addReview", async(req,res)=>{
    try {
        const newReview = await db.query("INSERT INTO reviews (restaurant_id, name, body, rating) VALUES($1, $2, $3, $4) RETURNING *"
        ,[req.params.id, req.body.name, req.body.body, req.body.rating]);
        console.log(newReview);
        res.status(201).json({
            status: "success",
            data:{
                body: newReview.rows[0]
            }
        })
    } catch (error) {
        console.log(error);
    }
})

  

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});