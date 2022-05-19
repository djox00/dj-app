const MyProfileReducer = (state = false , action) =>{ 

switch(action.type){
    
case 'PROFILE_VISIBLE': 
  return true; 
  case 'PROFILE_HIDDEN': 
  return false; 

default: 
return state; 


}
}

export default MyProfileReducer