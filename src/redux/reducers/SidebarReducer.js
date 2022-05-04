const SidebarReducer = (state = false, action) =>{

switch(action.type){
case 'SIDEBAR_OPEN': 
         return !state; 

case 'SIDEBAR_CLOSE': 
         return !state; 

         default: 
             return false; 

}

}
export default SidebarReducer