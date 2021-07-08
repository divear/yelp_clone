import React,{useState ,createContext} from "react";


export const Context = createContext();

export const ContextProvider = (props) =>{
    const [restaurants, setRestaurants] = useState([])
    const [selectedRest, setSelectedRest] = useState(null)

    const addRestaurants = (restaurant)=> {
        setRestaurants([...restaurants, restaurant])
    }

    return (
        <Context.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRest, setSelectedRest}}>
            {props.children}
        </Context.Provider>
    )
}