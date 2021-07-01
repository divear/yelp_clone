import React from 'react'
import StarRating from './StarRating'

function Reviews({reviews}) {
    return (
        <div className="revs">
            {reviews.map((review)=>{
                return(
                    
                    <div className="card">
                        <div className="cardHeader">
                            <span>{review.name}</span>
                            <span className="stars"><StarRating rating={review.rating}/></span>
                        </div>
                        <div className="cardBody">
                            <h3 className="cardText">{review.body}</h3>
                        </div>
                    </div>
                )
            })}
          
            {/*
            <div className="card">
                <div className="cardHeader">
                    <span>Luke</span>
                    <span className="stars"><StarRating rating={2}/></span>
                </div>
                <div className="cardBody">
                    <h3 className="cardText">This is a good restaurant lo</h3>
                </div>
            </div>
            <div className="card">
                <div className="cardHeader">
                    <span>Luke</span>
                    <span className="stars"><StarRating rating={2}/></span>
                </div>
                <div className="cardBody">
                    <h3 className="cardText">This is a good restaurant lo</h3>
                </div>
            </div>
            <div className="card">
                <div className="cardHeader">
                    <span>Luke</span>
                    <span className="stars"><StarRating rating={2}/></span>
                </div>
                <div className="cardBody">
                    <h3 className="cardText">This is a good restaurant lo</h3>
                </div>
            </div> */}
            
        </div>
    )
}

export default Reviews
