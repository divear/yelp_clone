import React from 'react'
import StarRating from './StarRating'

function Reviews() {
    return (
        <div className="revs">
            <div className="card">
                <div className="cardHeader">
                    <span>Luke</span>
                    <span className="stars"><StarRating rating={2}/></span>
                </div>
                <div className="cardBody">
                    <h3 className="cardText">This is a good restaurant lo</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Reviews
