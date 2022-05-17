const StarsReducer = (state = window.sessionStorage.getItem("stars") === 'true' , action) =>{
  
    switch(action.type){
    case 'STARS_VISIBLE': 
            window.sessionStorage.setItem("stars", true);
             return true;
             
    case 'STARS_HIDDEN': 
    window.sessionStorage.setItem("stars",false );  
          return false; 
    
             default: 
             return state; 
    }
    }
    export default StarsReducer