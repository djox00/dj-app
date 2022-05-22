import React, { Fragment } from 'react'
import Alert from '@mui/material/Alert';

const Error = (props) => {

  return (
    <Fragment>
      {/* <div className={styled['error-container']}>
        <p>{props.children.toString()} </p>
      </div> */}
       
      <Alert style={{backgroundColor: "rgb(34, 17, 17)", color: "rgb(240, 125, 125)"}}  severity="error">{props.children}</Alert>
      
    </Fragment>
  )
}

export default Error