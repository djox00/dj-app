const StarsReducer = (state =  true, action) =>{
  
    switch(action.type){
    case 'STARS_TOGGLE': 
             return !state; 
    
             default: 
             return state; 
    }
    }
    export default StarsReducer