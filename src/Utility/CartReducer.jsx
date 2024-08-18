export const reducer = (state, action) => {
  console.log("action", action);
  console.log(state, action);
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.payload.id,
          price: action.payload.price,
          name: action.payload.name,
        },
      ];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
