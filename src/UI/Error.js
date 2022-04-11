import React, { Fragment } from 'react'
import styled from './Error.module.scss'
import Alert from '@mui/material/Alert';

const Error = (props) => {

  return (
    <Fragment>
      {/* <div className={styled['error-container']}>
        <p>{props.children.toString()} </p>
      </div> */}
       
      <Alert style={{backgroundColor: "rgb(34, 17, 17)"}}  severity="error">{props.children.toString()}</Alert>
      
    </Fragment>
  )
}

export default Error