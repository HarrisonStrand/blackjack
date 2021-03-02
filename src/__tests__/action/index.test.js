import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('dealer reducer actions', () => {
  it('requestDealer should create REQUEST_DEALER action', () => {
    expect(actions.requestDealer()).toEqual({
      type: c.REQUEST_DEALER
    });
  });

  it('getDealerSuccess should create GET_DEALER_SUCCESS action', () => {
    const dealers = "A dealer";
    expect(actions.getDealerSuccess(dealers)).toEqual({
      type: c.GET_DEALER_SUCCESS,
      dealer
    });
  });

  it('getDealerFailure should create GET_DEALER_FAILURE action', () => {
    const error = "An error";
    expect(actions.getDealerFailure(error)).toEqual({
      type: c.GET_DEALER_FAILURE,
      error
    });
  });
})