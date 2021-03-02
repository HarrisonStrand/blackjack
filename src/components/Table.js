import React from 'react';

class Table extends React.Component {
  constructor(prop) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(createDealer())
    // dispatch(createGameDeck())
  }


  render() {
    return (
      <>
        <h1>Lorem working title for outerspace-western-casino-themed blackjack game ipsum</h1>
        
      </>
    )
  }
}