import { useEffect, useState } from "react";

function BookingList() { 
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/bookings")
            .then((res) => res.json())
            .then((data) => setBookings(data))
            .catch((error) => console.error("Failed to fetch bookings", error));
    }
        , []);
    
    return (
      <div>
        <h2>Booking List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Route</th>
              <th>Date</th>
              <th>Vehicle</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.route}</td>
                <td>{booking.departureDate}</td>
                <td>{booking.vehicle}</td>
                <td>{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default BookingList;