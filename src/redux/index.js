import StarsReducer from "./reducers/StarsReducer";
import SidebarReducer from "./reducers/SidebarReducer";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    StarsReducer,
    SidebarReducer,
  })