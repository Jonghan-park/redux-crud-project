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
    default:
      return state;
  }
};

export default contactReducer;
