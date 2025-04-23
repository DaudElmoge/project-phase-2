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
      <div className="bg-gradient-to-r from-black to-gray-900 text-white mt-6 p-4 rounded-xl shadow-lg overflow-x-auto">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">
          Booking List
        </h2>
        <table className="min-w-full table-auto text-sm sm:text-base">
          <thead>
            <tr className=" text-yellow-300">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Route</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Vehicle</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className=" hover:bg-gray-600 transition duration-200"
              >
                <td className="px-4 py-2">{booking.name}</td>
                <td className="px-4 py-2">{booking.route}</td>
                <td className="px-4 py-2">{booking.departureDate}</td>
                <td className="px-4 py-2">{booking.vehicle}</td>
                <td className="px-4 py-2">{booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default BookingList;