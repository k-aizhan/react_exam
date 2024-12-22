import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createTrip, assignDriver, assignVehicle, editTrip, deleteTrip, loadRepairRequests,} from '../../../BLL/dispatcherSlice.js'; 

export const Dispatcher = () => {

  const dispatcher = {
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnN1_rWUH7hd2_-HjDl-jPpuDD6_pOVj-pFg&s",
    fullName: "Лидия Иванова",
    email: "l.ivanova@mail.ru",    
  };
  const { drivers, vehicles, trips, repairRequests } = useSelector(
    (state) => state.dispatcher
  );
  const repairsFromDrivers = useSelector((state) => state.driver.repairs);
  const dispatch = useDispatch();

  const [newTrip, setNewTrip] = useState({ destination: '', date: '' });
  const [editTripData, setEditTripData] = useState(null);

  useEffect(() => {
    dispatch(loadRepairRequests(repairsFromDrivers));
  }, [repairsFromDrivers, dispatch]);

  const handleCreateTrip = () => {
    dispatch(createTrip(newTrip));
    setNewTrip({ destination: '', date: '' });
  };

  const handleEditTrip = (tripId) => {
    dispatch(editTrip({ tripId, updatedData: editTripData }));
    setEditTripData(null);
  };

  const handleDeleteTrip = (tripId) => {
    dispatch(deleteTrip(tripId));
  };

  return (
<div>
<h1>Dispatcher Dashboard</h1>
  <div className='dispatcherInfo'>
        <img src={dispatcher.photo} alt="Dispatcher" style={{ borderRadius: "100%", width: "300px" }} />
        <h4>{dispatcher.fullName}</h4>
        <p>Email: {dispatcher.email}</p>
  </div>
      <h2>Create Trip</h2>
      <input
        type="text"
        placeholder="Destination"
        value={newTrip.destination}
        onChange={(e) => setNewTrip({ ...newTrip, destination: e.target.value })}
      />
      <input
        type="date"
        value={newTrip.date}
        onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
      />
      <button onClick={handleCreateTrip}>Create Trip</button>

      <h2>Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            {editTripData?.id === trip.id ? (
              <>
                <input
                  type="text"
                  value={editTripData.destination}
                  onChange={(e) =>
                    setEditTripData({ ...editTripData, destination: e.target.value })
                  }
                />
                <input
                  type="date"
                  value={editTripData.date}
                  onChange={(e) =>
                    setEditTripData({ ...editTripData, date: e.target.value })
                  }
                />
                <button onClick={() => handleEditTrip(trip.id)}>Save</button>
                <button onClick={() => setEditTripData(null)}>Cancel</button>
              </>
            ) : (
              <>
                {trip.destination} on {trip.date} - Status: {trip.status}
                <button onClick={() => setEditTripData(trip)}>Edit</button>
                <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
              </>
            )}
            <div>
              <select
                onChange={(e) =>
                  dispatch(assignDriver({ tripId: trip.id, driverId: Number(e.target.value) }))
                }
              >
                <option value="">Assign Driver</option>
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) =>
                  dispatch(assignVehicle({ tripId: trip.id, vehicleId: Number(e.target.value) }))
                }
              >
                <option value="">Assign Vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.model}
                  </option>
                ))}
              </select>
            </div>
          </li>
        ))}
      </ul>

      <h2>Repair Requests</h2>
      <ul>
        {repairRequests.map((repair) => (
          <li key={repair.id}>
            {repair.description} - Status: {repair.status}
          </li>
        ))}
      </ul>
      <ul>
  {trips.map((trip) => (
    <li key={trip.id}>
      {trip.destination} on {trip.date} - Status: {trip.status}
      <div>
        <select
          onChange={(e) =>
            dispatch(assignDriver({ tripId: trip.id, driverId: Number(e.target.value) }))
          }
        >
          <option value="">Assign Driver</option>
          {drivers.map((driver) => (
            <option key={driver.id} value={driver.id}>
              {driver.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) =>
            dispatch(assignVehicle({ tripId: trip.id, vehicleId: Number(e.target.value) }))
          }
        >
          <option value="">Assign Vehicle</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.model}
            </option>
          ))}
        </select>
      </div>
    </li>
  ))}
</ul>
</div>


  )
}

export default Dispatcher;





