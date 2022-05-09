
const ChatColorReducer = (state = window.sessionStorage.getItem("CHAT_COLOR") || 'BLUE_THEME', action) =>{

    switch(action.type){
    case 'BLUE_THEME': 
              window.sessionStorage.setItem("CHAT_COLOR","BLUE_THEME"); 
             return state = 'BLUE_THEME' ; 

    case 'GREEN_THEME': 
              window.sessionStorage.setItem("CHAT_COLOR","GREEN_THEME"); 
               return 'GREEN_THEME'; 

   case 'PINK_THEME': 
              window.sessionStorage.setItem("CHAT_COLOR","PINK_THEME"); 
               return 'PINK_THEME'; 
    
             default: 
             return state; 
    }
    }
    export default ChatColorReducer