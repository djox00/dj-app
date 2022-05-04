import { configureStore } from "@reduxjs/toolkit";
import StarsReducer from "./reducers/StarsReducer";
import SidebarReducer from "./reducers/SidebarReducer";

export const myStore = configureStore({reducer:{StarsReducer,SidebarReducer}},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 