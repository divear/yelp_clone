import React, {useContext, useEffect} from 'react';
import Finder from '../apis/Finder';
import { Context } from '../context/Context';
import {useHistory} from "react-router-dom"
 
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
                    {restaurants && restaurants.map(res =>{
                        return(
                            <tr key={res.id}>
                                <td onClick={()=>handleSelect(res.id)}>{res.name}</td>
                                <td>{res.location}</td>
                                <td>{res.price_range}</td>
                                <td>reviews</td>
                                <td><button onClick={()=>handleUpdate(res.id)} className="edit">Edit</button></td>
                                <td><button onClick={()=>handleDelete(res.id)} className="delete">Delete</button></td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default List
