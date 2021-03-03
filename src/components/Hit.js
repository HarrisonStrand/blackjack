import React from 'react';

function Hit(props) {
  return (
    <>
      <img src={props.img} alt="{props.value} of {props.suit}" width='200px' height='auto'/> 
    </>
  )
}

export default Hit;