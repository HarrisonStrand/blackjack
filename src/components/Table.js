import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions';

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

  draw2Cards = () => {
    const { dispatch, deck } = this.props;
    dispatch(a.drawTwoCards(deck.deck.deck_id));
    
  }
  componentDidUpdate() {
    // document.getElementsByTagName('button').append(this.props.card[0].image);
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
        {/* <p>{card[1].image}</p> */}
        <button onClick={this.draw2Cards}>Draw Two Cards</button>
        {/* <p>{card[0].image}</p> */}
      </>
    )
    }
  }
}

const mapStateToProps = state => {
  return {
    dealerDetails: state.dealer,
    deck: state.deck,
    card: state.draw2Cards,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Table);