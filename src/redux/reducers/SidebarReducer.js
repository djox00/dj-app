const SidebarReducer = (state = false, action) =>{

switch(action.type){
case 'SIDEBAR_TOGGLE': 
         return !state; 

         default: 
             return state; 

}

}
export default SidebarReducer