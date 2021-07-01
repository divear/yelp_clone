//import e from 'cors';
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Finder from '../apis/Finder';
//import { Context } from '../context/Context';


function Update(props) {
    const {id} = useParams();
    let history = useHistory()
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState();

    useEffect(() => {
        async function fetchData(){
            const response = await Finder.get(`/${id}`);
            if(response.data.data.restaurant){
                console.log(response.data.data);
                setName(response.data.data.restaurant.name);
                setLocation(response.data.data.restaurant.location)
                setPrice(response.data.data.restaurant.price_range)
            }else{
                history.push("/");
            }
        }
        fetchData()
    })

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const updatedRestaurant = await Finder.put(`/${id}`, {
                name,
                location,
                price_range: price
            });
            history.push("/");
            console.log(updatedRestaurant);
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <div className="update">
            <title>Update the restaurant</title>
            <h1>Update the restaurant</h1>
            <form className="update-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} id="name" className="control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input onChange={(e)=>setLocation(e.target.value)} value={location} id="location" className="control" type="text" />
                </div>
                <div className="form-group">
                <label htmlFor="price_range">Price range:</label>
                    <select onChange={(e)=>setPrice(e.target.value)} value={price} id="price_range" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                                
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit" className="submit-edit">Submit</button>
                
                
                
            </form>
        </div>
    )
}

export default Update
