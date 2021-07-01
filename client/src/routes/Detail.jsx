import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Finder from '../apis/Finder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { Context } from '../context/Context';


function Detail() {
    const {id} = useParams();
    const {selectedRest, setSelectedRest} = useContext(Context);
    let history = useHistory()

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await Finder.get(`/${id}`);
                console.log(response);
                
                setSelectedRest(response.data.data.restaurant);
                
                
            } catch (error) {
                console.log(error);
                history.get("/")
            }

        }
        fetchData()
    },[])
    return (
        <div>
            <h5>Details of </h5><h1> {selectedRest ? (
                <div>
                    <Reviews/>
                    <AddReview/>
                </div>
               
            ) : history.push("/")}</h1>
        </div>
    )
}

export default Detail
