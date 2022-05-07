
const ChatColorReducer = (state = 'BLUE_THEME', action) =>{

    switch(action.type){
    case 'BLUE_THEME': 
             return state = 'BLUE_THEME' ; 

    case 'GREEN_THEME': 
               return 'GREEN_THEME'; 

   case 'PINK_THEME': 
               return 'PINK_THEME'; 
    
             default: 
             return state; 
    }
    }
    export default ChatColorReducer