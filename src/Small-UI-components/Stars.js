import React, { Fragment } from 'react'
import styled from './Stars.module.scss'
import { animated, useSpring } from 'react-spring';
const Stars = () => {

  const stars = useSpring({

    from:{opacity: 0}, to: {opacity: 1},
    delay: 2000
  });


  return (
    <Fragment> 
       <animated.div style={stars}>
 <section className={styled.section}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </section>
    </animated.div>

    </Fragment>
  )
}

export default Stars