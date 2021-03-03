import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions';
import PlayerHand from './PlayerHand';
import DealerHand from './DealerHand';

class Table extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const randomNumberForDealerId = Math.floor((Math.random() * 3) + 1);
    dispatch(a.createDealer(randomNumberForDealerId));
    dispatch(a.createGameDeck())
  }

  handleDraw2Cards = () => {
    const { dispatch, deck } = this.props;
    dispatch(a.drawTwoCards(deck.deck.deck_id)); 
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.pokemons !== this.state.pokemons) {
  //     console.log('pokemons state has changed.')
  //   }
  // }

  render() {
    const { error, isLoading, dealerDetails, deck, card } = this.props;

    if (error) {
      return (<>Error: {error.message}</>);
    } else if (isLoading) {
      return (<>Loading...</>)
    } else {
      return (
      <>
        <h1>Lorem working title for outerspace-western-casino-themed blackjack game ipsum</h1>
        <hr/>
        <h4>Dealer</h4>
        <p>Nom de plume: {dealerDetails.dealer.name}</p>
        <p>Alleged reputation: {dealerDetails.dealer.description}</p>
        <p>Tight/Loose ratio: {dealerDetails.dealer.playStyle} yee-haws!</p>
        <p>Deck id: {deck.deck.deck_id}</p>
        <PlayerHand
        onDraw2Cards = {this.handleDraw2Cards}
        />
        <DealerHand/>
      </>
    )
  }
}
}


// class Component extends React.Component {
// 	const a = true
// 	render() {
//       return (
//     	<Container>
//           {a == true
//            ? (<Button/>)
//            : null
//           }
//         </Container>    	
// 	  )
// 	}
// }

// This is saying: if a == true, render a button component. 
// Otherwise render null, in other words nothing.


// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }



const mapStateToProps = state => {
  return {
    dealerDetails: state.dealer,
    deck: state.deck,
    twoCardsToDeal: state.twoCardsToDeal,
  }
}

export default connect(mapStateToProps)(Table);