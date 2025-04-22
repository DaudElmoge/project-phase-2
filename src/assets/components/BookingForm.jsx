import { useState, useEffect } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [routes, setRoutes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Failed to fetch routes", error));

    fetch("http://localhost:3000/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error("Failed to fetch vehicles", error));
  }, []);

  useEffect(() => {
    const selected = routes.find((r) => r.id.toString() === route);
    if (selected) {
      setDepartureTime(selected.departure_time);
      setPrice(selected.price);
    } else {
      setDepartureTime("");
      setPrice("");
    }
  }, [route, routes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !route || !date || !vehicle) {
      setError("Please fill in all fields");
      return;
    }

    const selectedRoute = routes.find((r) => r.id.toString() === route);
    const newBooking = {
      name,
      route: `${selectedRoute.from}-${selectedRoute.to}`,
      vehicle,
      departureDate: date,
      departureTime: selectedRoute.departure_time,
      price: selectedRoute.price,
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Booking successful");
        // Reset form
        setName("");
        setRoute("");
        setVehicle("");
        setDate("");
        setDepartureTime("");
        setPrice("");
        setError("");
      })
      .catch((error) => {
        console.error("Failed to submit booking", error);
        setError("Failed to submit booking");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" id="book">
      <h2>Book a Seat</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select value={route} onChange={(e) => setRoute(e.target.value)} required>
        <option value="">Select Route</option>
        {routes.map((r) => (
          <option key={r.id} value={r.id}>
            {r.from} - {r.to} - {r.price}
          </option>
        ))}
      </select>

      <select
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        required
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {departureTime && (
        <p>
          Departure Time: <strong>{departureTime}</strong>
        </p>
      )}

      {price && (
        <p>
          Price: <strong>{price}</strong>
        </p>
      )}

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;

/*import { useState, useEffect } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [depatureTime, setDepartureTime] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Failed to fetch routes",error));

    fetch("http://localhost:3000/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error("Failed to fetch vehicles",error));
  }, []);

  useEffect(() => {
    const selected = routes.find((route) => `${route.from}-${route.to}` === route);
    setDepartureTime(selected?.departure_time || "");
  }, [route, routes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !route.trim() ||
      !date.trim() ||
      !depatureTime.trim() ||
      !price.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }
    const newbooking = {
      name,
      route,
      vehicle,
      depatureDate: date,
      depatureTime,
      price,
    };
    console.log("Booking submitted:", newbooking);
    // Reset form fields
    setName("");
    setRoute("");
    setDate("");
    setDepartureTime("");
    setPrice("");
    setError("");
    
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbooking),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Booking successful");
        setName("");
        setRoute("");
        setVehicles("");
        setDate("");
        setDepartureTime("");
        setError("");
      })
      .catch((error) => {
        console.error("Failed to submit booking", error);
        setError("Failed to submit booking");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" id="book">
      <h2>Book a Seat</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={route} onChange={(e) => setRoute(e.target.value)} required>
        <option value="">Select Route</option>
        {routes.map((route) => (
          <option
            key={route.id}
            value={`${route.from}- ${route.to}- ${route.price}`}
          >
            {route.from}-{route.to}-{route.price}
          </option>
        ))}
      </select>

      <select
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        required
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle.id} value={vehicle.name}>
            {vehicle.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      {depatureTime && (
        <p>
          Departure Time: <strong>{depatureTime}</strong>
        </p>
      )}

      {price && (
        <p>
          Price: <strong>{price}</strong>
        </p>
      )}
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;*/
