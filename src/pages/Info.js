import React, {Fragment} from 'react'
import styled from './Info.module.scss'
import {motion} from 'framer-motion'

const Info = () => {
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
      }}> 
    



    <div className={styled.card}>
    sdads 



  </div>



    </motion.div>


    </Fragment>
  )
}

export default Info