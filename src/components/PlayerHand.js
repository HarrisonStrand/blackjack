import React from 'react';
import Deal from './Deal';
import Hit from './Hit';
import { connect } from 'react-redux';

function PlayerHand(props) {

	console.log(props.twoCardsToDeal);
	console.log(props.Hit);

  return (
    <>
      <button onClick={props.onDraw2Cards}>Deal</button>
      <button onClick={props.onHit}>Hit</button>
      <button>Stand</button>
      {props.twoCardsToDeal.map((card, index) =>

      <Deal
        code={card.code}
        img={card.image}
        value={card.value}
        suit={card.suit}
        key={index}
				/>
				)}
      {Object.values(props.hit).map((card, index) =>

      <Hit
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
    twoCardsToDeal: state.twoCardsToDeal,
		hit: state.hit
  }
}

export default connect(mapStateToProps)(PlayerHand);