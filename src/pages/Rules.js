import React, { Fragment } from 'react'
import styled from './Rules.module.scss'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { motion } from 'framer-motion';



const Rules = () => {
  return (
    <Fragment> 

<motion.div className={styled.page}
 initial={{opacity: 0}}
 animate={{
   opacity: 1,
   transition: {
     duration: 0.5,
     ease: [0.61, 1, 0.88, 1],
   }
 }}
 exit={{opacity: 0,  transition: {duration: 0.7} }}

> 

<div className={styled.panel}> 
<RocketLaunchOutlinedIcon  style={{color: "yellow", transform: "rotate(45deg)"}} />
<ul> 
  
<li>  Be respectful, civil, and welcoming.   </li>
<li> No inappropriate or unsafe content. </li>
<li> Spamming in any form is not allowed.  </li>
<li> Controversial topics such as religion or politics are not allowed.  </li>
<li> Anything to target specific groups/individuals is prohibited.  </li>
<li> Engaging in message chains is prohibited.  </li>
<li> Any sort of discrimination will not be tolerated.   </li>
<li> Don’t be toxic or mean, including bashing people’s posts unprovoked.  </li>
<li> Be kind and respectful to others.   </li>
<li>No hate speech or trolling. </li>
<li>Do not share personal information.   </li>
<li> Do not advertise without permission.  </li>
<li> The most important rule of all is to have fun!   </li>

</ul>

</div>


</motion.div>

    </Fragment>  
  )
}

export default Rules