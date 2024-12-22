import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  repairs: [],
  completedTrips: [],
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    completeTrip: (state, action) => {
      const trip = action.payload;
      trip.status = 'Completed';
      state.completedTrips.push(trip);
    },
    createRepairRequest: (state, action) => {
      state.repairs.push({
        id: Date.now(),
        ...action.payload,
        status: 'Pending',
      });
    },
  },
});

export const { completeTrip, createRepairRequest } = driverSlice.actions;
export default driverSlice.reducer;
