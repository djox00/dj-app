import StarsReducer from "./reducers/StarsReducer";
import SidebarReducer from "./reducers/SidebarReducer";
import ChatColorReducer from "./reducers/ChatColorReducer";
import MyProfileReducer from "./reducers/MyProfileReducer";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    StarsReducer,
    SidebarReducer,
    ChatColorReducer,
    MyProfileReducer
  })