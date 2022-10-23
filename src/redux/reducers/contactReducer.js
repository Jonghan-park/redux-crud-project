const initialState = [
  {
    id: 0,
    name: "Jonghan Park",
    number: 1234567890,
  },
  {
    id: 1,
    name: "Test Name",
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
