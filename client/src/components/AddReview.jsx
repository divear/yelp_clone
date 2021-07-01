import React, { useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Finder from '../apis/Finder';

function AddReview() {
    const {id} =  useParams();
    const history = useHistory()
    const location = useLocation()

    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    async function handleSubmitReview(e){
        e.preventDefault();
        try {
            const response = await Finder.post(`/${id}/addReview`, {
                name,
                body: review,
                rating
            });
            history.push("/")
            history.push(location.pathname)
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <div className="addrev">
            <form action="">
                <div className="formRow">
                    <h2>Add a review</h2>
                    <label htmlFor="name">Your name</label>
                    <input value={name} id="name"onChange={(e)=>setName(e.target.value)} type="text" />
                </div>
                <div className="formRow">
                    <label htmlFor="rating">Rating</label>
                    <select value={rating} onChange={(e)=>{setRating(e.target.value)}} id="rating">
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="formRow">
                    <label htmlFor="Review">Review</label>
                    <textarea value={review} onChange={(e)=>setReview(e.target.value)} id="Review"/>
                </div>
                <button onClick={handleSubmitReview} className="addrevsub" type="submit">Add a new review</button>
            </form>
        </div>
    )
}

export default AddReview;