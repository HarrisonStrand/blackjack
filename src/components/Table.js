import React from 'react';

class Table extends React.Component {
  constructor(prop) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const randomNumberForDealerId = Math.floor((Math.random() * 3) + 1);
    dispatch(createDealer(randomNumberForDealerId));
    // dispatch(createGameDeck())
  }


  render() {
    return (
      <>
        <h1>Lorem working title for outerspace-western-casino-themed blackjack game ipsum</h1>
        <p>Dealer: {this.props.dealer.Name}</p>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    dealer: state.dealer
  }
}

export default connect(mapStateToProps)(Table);