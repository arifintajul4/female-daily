const initialState = {
  dataHome: {},
  isLoading: true,
  isError: false,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA_HOME":
      return {
        ...state,
        dataHome: action.payload,
        isLoading: action.loading,
        isError: action.error,
      };
    default:
      return state;
  }
};
