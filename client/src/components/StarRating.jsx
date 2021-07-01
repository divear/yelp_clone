import React from 'react';
import {IoMdStarHalf, IoMdStar, IoMdStarOutline} from "react-icons/io"

function StarRating({rating}) {
    const stars = [];
    for(let i = 1;i<6;i++){
        if(i <= rating){
            stars.push(<IoMdStar key={i}/>)
        }else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<IoMdStarHalf/>)
        }else{
            stars.push(<IoMdStarOutline key={i}/>)
        }
    }
    return (
        <div>
            {stars}
        </div>
    )
}

export default StarRating;
