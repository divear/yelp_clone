import React, {useContext, useEffect} from 'react';
import Finder from '../apis/Finder';
import { Context } from '../context/Context';

function List(props) {
    const {restaurants, setRestaurants} = useContext(Context);



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
            const response = Finder.delete(`/${id}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Header">
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
                                <td>{res.name}</td>
                                <td>{res.location}</td>
                                <td>{res.price_range}</td>
                                <td>reviews</td>
                                {/* <td><button onClick={()=>handleUpdate(restaurant.id)} className="edit">Edit</button></td> */}
                                <td><button onClick={()=>handleDelete(restaurants.id)} className="delete">Delete</button></td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default List
