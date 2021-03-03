import React from 'react';
import Deal from './Deal';
import Hit from './Hit';
import { connect } from 'react-redux';

function DealerHand(props) {
  return (
    <>
		{Object.values(props.twoCardsToDeal).map((card, index) =>

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

export default connect(mapStateToProps)(DealerHand);