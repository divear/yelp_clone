import React,{useState ,createContext} from "react"


export const Context = createContext();

export const ContextProvider = props =>{
    const [restaurants, setRestaurants] = useState("")

    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}