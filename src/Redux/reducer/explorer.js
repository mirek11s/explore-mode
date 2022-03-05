export const GET_TRENDING = "GET_TRENDING";
const SET_TRENDING = "SET_TRENDING";

export const getTrending = () => ({
  type: GET_TRENDING,
});

export const setTrending = (data) => ({
  type: SET_TRENDING,
  data: data,
});

const initialState = {
  data: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING:
      const { data } = action;
      return { ...state, data: data };
    default:
      return state;
  }
};
