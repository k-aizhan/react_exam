import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createRepairRequest } from '../../../BLL/dispatcherSlice.js';
import { updateTripStatus } from '../../../BLL/dispatcherSlice.js';


export const Driver = () => {
  const trips = useSelector((state) => state.dispatcher.trips);
  const { repairs } = useSelector((state) => state.driver);
  const dispatch = useDispatch();

  const [repairRequest, setRepairRequest] = useState({ description: '' });

  const handleCreateRepairRequest = () => {
    if (repairRequest.description.trim() === '') {
      alert('Repair description cannot be empty.');
      return;
    }

    dispatch(createRepairRequest(repairRequest)); // Отправка заявки в Redux
    setRepairRequest({ description: '' }); // Очистка поля ввода
  };

  const handleCompleteTrip = (tripId) => {
    dispatch(updateTripStatus({ tripId, status: 'Done' })); // Изменение статуса поездки
  };

  return (
    <div>
      <h1>Driver Dashboard</h1>
      <h2>My Trips</h2>
      <ul>
        {trips.map(
          (trip) =>
            trip.status === 'Created' && (
              <li key={trip.id}>
                {trip.destination} on {trip.date}
                <button onClick={() => handleCompleteTrip(trip.id)}>Mark as Completed</button>
              </li>
            )
        )}
      </ul>

      <h2>Repair Requests</h2>
      <input
        type="text"
        placeholder="Repair Description"
        value={repairRequest.description}
        onChange={(e) => setRepairRequest({ description: e.target.value })}
      />
      <button onClick={handleCreateRepairRequest}>Request Repair</button>
      <ul>
        {repairs.map((repair) => (
          <li key={repair.id}>
            {repair.description} - Status: {repair.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Driver;
