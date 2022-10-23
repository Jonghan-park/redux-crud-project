const initialState = [
  {
    id: 0,
    name: "Jonghan Park",
    email: "rs@gmail.com",
    number: 1234567890,
  },
  {
    id: 1,
    name: "Test Name",
    email: "test@gmail.com",
    number: 789456123,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      return state;
    default:
      return state;
  }
};

export default contactReducer;
