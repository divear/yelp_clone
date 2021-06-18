const express = require("express");
const app = express();
require("dotenv").config();

app.get("/restaurants", (req, res)=>{
    res.json({
        status: "success",
        restaurant: "mcdonalds"
    })
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})