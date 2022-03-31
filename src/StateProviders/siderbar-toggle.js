import React from "react";
import { useState } from "react";

const SideBarToggleContext = React.createContext({
    SBvisible: false,
    SBtoggle: () => {}
    
})

export const SideBarContextProvider = (props) =>{ 

const [sideBarVisible, setsideBarVisible] = useState(false); 


const toggleHandler = () =>{
    setsideBarVisible((status)=>!status); 
}

return( <SideBarToggleContext.Provider value={{SBvisible: sideBarVisible, SBtoggle : toggleHandler   }} > {props.children}</SideBarToggleContext.Provider>)

}
export default SideBarToggleContext; 