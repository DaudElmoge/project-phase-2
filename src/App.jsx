import React from "react";
import Header from "./components/Header";
import AdSection from "./components/AdSection";
import RouteDisplay from "./components/RouteDisplay";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <AdSection />
      <div>
        <RouteDisplay />
      </div>
      <div>
        <BookingForm />
      </div>
      <div>
        <BookingList />
      </div>
      <div>
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}

export default App;
