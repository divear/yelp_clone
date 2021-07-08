import React, { useContext, useState } from 'react';
import Finder from '../apis/Finder';
import { Context } from '../context/Context';

function Add() {
    const {addRestaurants} = useContext(Context)
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("Price range");

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const response = await Finder.post("/", {
                name: name,
                location: location,
                price_range: price
            });
            addRestaurants(response.data.data.restaurant)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Add">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="name" placeholder="name"/>
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="location" placeholder="location"/>
                        <select value={price} onChange={e => setPrice(e.target.value)} className="select">
                            <option disabled>Price range</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            
                        </select>
                        <button type="submit" className="AddResturant">Add</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default Add;
