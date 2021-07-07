import React from 'react'
import StarRating from './StarRating'

function Reviews({reviews}) {
    return (
        <div className="revs">
            {reviews.map((review)=>{
                return( 
                    <div key={review.id} className="card">
                        <div className="cardHeader">
                            <span>{review.name}</span>
                            <br />
                            <span className="stars"><StarRating rating={review.rating}/></span>
                        </div>
                        <div className="cardBody">
                            <h3 className="cardText">{review.body}</h3>
                        </div>
                    </div>
                )
            })}
          
            
            
        </div>
    )
}

export default Reviews
