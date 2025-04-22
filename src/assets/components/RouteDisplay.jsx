import { useEffect, useState } from "react";

function RouteDisplay() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/routes")
      .then((res) => res.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Failed to fetch routes", error));
  }, []);

  return (
    <div>
      <h2>Available Routes</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            {route.from} to {route.to} - Departure Time: {route.departureTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RouteDisplay;
