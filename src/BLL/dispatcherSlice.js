import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drivers: [{ id: 1, name: 'John Doe' }],
  vehicles: [{ id: 1, model: 'Truck A' }],
  trips: [],
  repairRequests: [], 
};

const dispatcherSlice = createSlice({
  name: 'dispatcher',
  initialState,
  reducers: {
    createTrip: (state, action) => {
      state.trips.push({
        id: Date.now(),
        ...action.payload,
        status: 'Created',
      });
    },
    editTrip: (state, action) => {
      const { tripId, updatedData } = action.payload;
      const trip = state.trips.find((t) => t.id === tripId);
      if (trip) {
        Object.assign(trip, updatedData);
      }
    },
    updateTripStatus: (state, action) => {
      const { tripId, status } = action.payload;
      const trip = state.trips.find((t) => t.id === tripId);
      if (trip) {
        trip.status = status;
      }
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
    },
    
    assignDriver: (state, action) => {
      const { tripId, driverId } = action.payload;
      const trip = state.trips.find((t) => t.id === tripId);
      if (trip) trip.driverId = driverId;
    },
    assignVehicle: (state, action) => {
      const { tripId, vehicleId } = action.payload;
      const trip = state.trips.find((t) => t.id === tripId);
      if (trip) trip.vehicleId = vehicleId;
    },
    loadRepairRequests: (state, action) => {
      state.repairRequests = action.payload;
    },
  },
});

export const {createTrip,editTrip,deleteTrip,assignDriver,assignVehicle,loadRepairRequests,updateTripStatus, completeTrip, createRepairRequest } = dispatcherSlice.actions;
export default dispatcherSlice.reducer;
