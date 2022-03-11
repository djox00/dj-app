import React, { Fragment } from 'react'
import styled from './Error.module.css'

const Error = (props) => {
  return (
    <Fragment> 
   <div className={styled['error-container']}>     
   <p> {props.val}</p>
   </div>

    </Fragment>
  )
}

export default Error