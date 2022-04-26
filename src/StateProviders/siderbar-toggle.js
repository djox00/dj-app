import React from "react";
import { useState } from "react";

const ToggleContext = React.createContext({
    SBvisible: false,
    SBtoggle: () => {},
    stars: true,
    toggleStars: () =>{}
    
})

export const ToggleContextProvider = (props) =>{ 

const [sideBarVisible, setsideBarVisible] = useState(false); 

const [starsVisible, setstarsVisible] = useState(true); 


const toggleHandler = () =>{
    setsideBarVisible((status)=>!status); 
}
const starsHandler = () =>{
    setstarsVisible((status)=>!status); 
}


return( <ToggleContext.Provider 
value={{
    SBvisible: sideBarVisible, 
    SBtoggle : toggleHandler,
    stars : starsVisible,
     toggleStars : starsHandler, 
     
    }} > {props.children}</ToggleContext.Provider>)

}
export default ToggleContext; 