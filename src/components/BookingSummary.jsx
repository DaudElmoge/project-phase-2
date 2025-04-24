import { useEffect, useState, useRef } from "react";

function BookingSummary() {
  const [bookings, setBookings] = useState([]);
  const printRef = useRef();// this will create a reference to the printRef div
  // this will be used to get the contents of the printRef div

  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Failed to fetch bookings", error));
  }, []);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;// this will get the contents of the printRef
    // Save the original contents of the body
    const originalContents = document.body.innerHTML;// this will get the original contents of the body

    document.body.innerHTML = printContents;//this will replace the entire body with the contents of the printRef
    window.print();// this will open the print dialog
    // After printing, restore the original contents
    // and reload the page to return to the app
    // This is important to ensure that the app returns to its original state
    // and doesn't stay in the print view
    document.body.innerHTML = originalContents;// this will replace the body with the original contents
    window.location.reload(); // reload to return to app after printing
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div
        ref={printRef}
        className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-900 text-white rounded-xl shadow-lg border p-4 sm:p-6"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4 text-center">
          Booking Summary
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead>
              <tr className="text-yellow-300 bg-gray-800">
                <th className="px-4 py-2 text-left whitespace-nowrap">Name</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Phone Number
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Route</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Date</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Departure Time
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Vehicle
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-700 transition duration-200"
                >
                  <td className="px-4 py-2">{booking.name}</td>
                  <td className="px-4 py-2">{booking.number}</td>
                  <td className="px-4 py-2">{booking.route}</td>
                  <td className="px-4 py-2">{booking.departureDate}</td>
                  <td className="px-4 py-2">{booking.departureTime}</td>
                  <td className="px-4 py-2">{booking.vehicle}</td>
                  <td className="px-4 py-2">{booking.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrint}
            className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition duration-200"
          >
            Print / Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;

/*import { useEffect, useState } from "react";


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
export default BookingList;*/
