import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('table reducer actions', () => {
  it('requestTable should create REQUEST_TABLE action', () => {
    expect(actions.requestTable()).toEqual({
      type: c.REQUEST_TABLE
    });
  });

  it('getTableSuccess should create GET_TABLE_SUCCESS action', () => {
    const tables = "A table";
    expect(actions.getTableSuccess(tables)).toEqual({
      type: c.GET_TABLE_SUCCESS,
      tables
    });
  });

  it('getTableFailure should create GET_TABLE_FAILURE action', () => {
    const error = "An error";
    expect(actions.getTableFailure(error)).toEqual({
      type: c.GET_TABLE_FAILURE,
      error
    });
  });
})