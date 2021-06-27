import React, {useContext, useEffect} from 'react';
import Finder from '../apis/Finder';
import { Context } from '../context/Context';

function List() {
    const {restaurants, setRestaurants} = useContext(Context);

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await Finder.get("/");
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchData()
    },[])

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
                    <tr>
                        <td>McDonalds</td>
                        <td>New York</td>
                        <td>3</td>
                        <td></td>
                        <td><button className="edit">Edit</button></td>
                        <td><button className="delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default List
