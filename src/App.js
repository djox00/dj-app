
import React, { Fragment} from 'react';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './UI/Footer';
import Rules from './pages/Rules';
import Loading from './Small-UI-components/Loading';
import  Home  from './pages/Home';
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBarContextProvider } from './StateProviders/siderbar-toggle';

function App() {


  return (
    <Fragment>    
    <Router>
           <NavBar/> 
   <Routes>
      
        <Route path="/Home" element={<SideBarContextProvider> <Home/> </SideBarContextProvider> }/>
      
        <Route path="/Login" element={ <Login/> } />
        <Route path="/MyProfile" element={ <MyProfile />} />
        <Route path="/Rules" element={ <Rules/> } />
        <Route exact path="/" element={ <Landing />} />

      </Routes>
     
   </Router>
  
   <footer> <Footer/></footer>
   </Fragment>
  );
}


export default App;
