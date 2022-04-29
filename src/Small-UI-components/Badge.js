import React, { Fragment } from 'react'
import styled from './Badge.module.scss'

//https://ba.linkedin.com/in/djordje-djuric?trk=profile-badge

const Badge = () => {




  return (
    <Fragment> 
       <div className={styled['badge-container']}> 
       <div className={styled.profile}>  

       <img src={"https://lh3.googleusercontent.com/a-/AOh14GhBMPOLvqMCy6Rj7MlCaRGmUw87kG5WrIASmF4Nlw=s96-c"} alt="Djordje Djuric" />
       <p>Djordje Djuric</p>


       <a href={"https://github.com/djox00" } target="_blank"> 
       <div className={styled.badge}>   
            <img src={"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"} alt="github" />
           <p>github.com/djox00</p>
         </div> 
         </a>


         <a href={"https://www.linkedin.com/in/djordje-djuric/"} target="_blank"> 
         <div className={styled.badge}>   
         <img src={"https://www.mhe-sme.org/wp-content/uploads/2017/12/linkedin-icon.png"} alt="linkedin" />
         <p>in/djordje-djuric</p>
       </div>
       </a> 


       </div>   
         </div>

                 

    </Fragment>
  )
}

export default Badge