export const selectDate = (date) => ({
    type: 'SELECT_DATE',
    payload: date,
  });
  
  export const selectTimeSlot = (timeSlot) => ({
    type: 'SELECT_TIME_SLOT',
    payload: timeSlot,
  });