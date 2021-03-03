import React from 'react';

function Card(props) {
  return (
    <>
      <img src={props.img} alt="{props.value} of {props.suit}" width='200px' height='auto'/> 
    </>
  )
}

export default Card;