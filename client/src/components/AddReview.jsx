import React, { useState } from 'react';

function AddReview() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    
    return (
        <div className="addrev">
            <form action="">
                <div className="formRow">
                    <label htmlFor="name">Name</label>
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
                <button className="addrevsub" type="submit">Add a new review</button>
            </form>
        </div>
    )
}

export default AddReview
