import React, {useContext, useEffect, useState} from 'react';
import Finder from '../apis/Finder';
import { Context } from '../context/Context';
import {useHistory} from "react-router-dom"
import StarRating from './StarRating';
 
function List(props) {
    const {restaurants, setRestaurants} = useContext(Context);
    let history = useHistory()


    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await Finder.get("/");
                
                setRestaurants(response.data.data.restaurants)
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchData()
    },[setRestaurants]);

    async function handleDelete(id){
        try {
            const response = await Finder.delete(`/${id}`);
            console.log(response);
            setRestaurants(restaurants.filter((restaurant) => {
                return restaurant.id !== id
            }));
            
        } catch (error) {
            console.log(error);
        }
    }
    async function handleUpdate(id){
        history.push(`/restaurants/${id}/update`)
    }
    async function handleSelect(id){
        history.push(`/restaurants/${id}`)
    }
    function renderRating(restaurant){
        console.log(restaurant);
        
        return(<div className="stars">
            <StarRating rating={restaurant.average_rating}/>
            <br />
            <span className="revMes">{restaurant.count ? restaurant.count + " reviews" : "0 reviews"}</span>
        </div>)
    }
    function MakepriceComment(restaurant){
        
        const b = {
            1: "Almost free",
            2: "Very Cheap",
            3: "Mediocre price",
            4: "Not that expensive",
            5: "Expensive"
        }
        return (
            <td>{eval("b[" + restaurant.price_range + "]")}</td>
        )
    }

    return (
        <div className="Header">
            <title>Restaurants</title>
            <table>
                <thead>
                    <tr className="prim">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant =>{
                        return(
                            <tr key={restaurant.id}>
                                <td className="clickAble" onClick={()=>handleSelect(restaurant.id)}>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{restaurant.price_range} /5 
                                {MakepriceComment(restaurant)}</td>
                               
                                <td className="clickAble" onClick={()=>handleSelect(restaurant.id)}>{renderRating(restaurant)}</td>
                                
                                <td><button onClick={()=>handleUpdate(restaurant.id)} className="edit">Edit</button></td>
                                <td><button onClick={()=>handleDelete(restaurant.id)} className="delete">Delete</button></td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default List
