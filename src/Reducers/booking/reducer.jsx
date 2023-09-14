const initialState = {
    selectedDate: '',
    selectedTimeSlot: '',
  };
  
  export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_DATE':
        return {
          ...state,
          selectedDate: action.payload,
        };
      case 'SELECT_TIME_SLOT':
        return {
          ...state,
          selectedTimeSlot: action.payload,
        };
      default:
        return state;
    }
  };