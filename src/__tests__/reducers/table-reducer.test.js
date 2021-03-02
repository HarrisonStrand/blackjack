import tableReducer from './../../reducers/table-reducer';
import * as c from './../../actions/ActionTypes'

describe('tableReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    table: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
    table: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(tableReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        table: [],
        error: null
      }
    );
  });

  test('requesting table should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_TABLE
    };

    expect(tableReducer(defaultState, action)).toEqual({
        isLoading: true,
        table: [],
        error: null
    });
  });

  test('successfully getting table should change isLoading to false and update table', () => {
    const table = "A table";
    action = {
      type: c.GET_TABLE_SUCCESS,
      table
    };

    expect(tableReducer(loadingState, action)).toEqual({
        isLoading: false,
        table: "A table",
        error: null
    });
  });

  test('failing to get table should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_TABLE_FAILURE,
      error
    };

    expect(tableReducer(loadingState, action)).toEqual({
        isLoading: false,
        table: [],
        error: "An error"
    });
  });
});