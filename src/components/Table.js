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
    console.log(randomNumberForDealerId);
    dispatch(a.createDealer(randomNumberForDealerId));
    // dispatch(createGameDeck())
  }


  render() {
    const { error, isLoading, dealer } = this.props;
    if (error) {
      return (<>Error: {error.message}</>);
    } else if (isLoading) {
      return (<>Loading...</>)
    } else {
      return (
      <>
        <h1>Lorem working title for outerspace-western-casino-themed blackjack game ipsum</h1>
        <p>Dealer: {dealer.name}</p>
      </>
    )
    }
  }
}

const mapStateToProps = state => {
  return {
    dealer: state.dealer,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Table);