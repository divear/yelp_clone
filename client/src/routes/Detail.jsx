import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Finder from '../apis/Finder';
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
            <h1>Details of {selectedRest ? selectedRest.name : history.push("/")}</h1>
        </div>
    )
}

export default Detail
