import React, { useState } from 'react'

function Add() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("Price range");

    return (
        <div className="Add">
            <form action="">
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
                        <button className="AddResturant">Add</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default Add;
