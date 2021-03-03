import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function PlayerHand(props) {

	console.log(props.twoCardsToDeal);

  return (
    <>
      <button onClick={props.onDraw2Cards}>Draw Two Cards</button>
      <p>TESTS</p>
      {Object.values(props.twoCardsToDeal).map((card, index) =>

      <Card
        code={card.code}
        img={card.image}
        value={card.value}
        suit={card.suit}
        key={index}
				/>
				)}
    </>
  )
}

const mapStateToProps = state => {
  return {
    twoCardsToDeal: state.twoCardsToDeal
  }
}

export default connect(mapStateToProps)(PlayerHand);