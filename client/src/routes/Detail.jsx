import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Finder from '../apis/Finder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { Context } from '../context/Context';
import {FaHome} from "react-icons/fa"


function Detail() {
    
    const {id} = useParams();
    const {selectedRest, setSelectedRest} = useContext(Context);
    let history = useHistory()
    

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await Finder.get(`/${id}`);
                console.log(response);
                
                setSelectedRest(response.data.data);
                
            } catch (error) {
                console.log(error);
                history.get("/");
            }
        }
        fetchData()
        
    },[])
    return (
        <div>
            
            <h1> {selectedRest ? (
                <div>
                    <title>{selectedRest.restaurant.name}</title>
                    <FaHome onClick={()=>history.push("/")} className="homeIcon"/>
                    <h1 className="restname">{selectedRest.restaurant.name}</h1>
                    <div className="stars">
                        <StarRating rating={selectedRest.restaurant.average_rating}/>
                        <span>
                            {selectedRest.restaurant.count ? `(${selectedRest.restaurant.count})` : "(0)"}
                        </span>
                    </div>
                    <Reviews reviews={selectedRest.reviews}/>
                    
                    <AddReview/>
                </div>
               
            ) : history.push("/")}</h1>
        </div>
    )
}

export default Detail
