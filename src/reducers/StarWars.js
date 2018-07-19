const initialState = { planet: { loading: true } };

const StarWars = (state = initialState, action) => {
  switch (action.type) {
    case 'PLANET_GET':
      return initialState;

    case 'PLANET_GET_SUCCESS':
      return { ...state, planet: { loading: false, ...action.data } };

    default:
      return state;
  }
};

export default StarWars;
