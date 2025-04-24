import React from "react";
import Header from "./assets/components/Header";
import AdSection from "./assets/components/AdSection";
import RouteDisplay from "./assets/components/RouteDisplay";
import BookingForm from "./assets/components/BookingForm";
import BookingList from "./assets/components/BookingSummary";
//import LocationMap from "./assets/components/LocationMap";
import Footer from "./assets/components/Footer";
import BookingSummary from "./assets/components/BookingSummary";

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
        <BookingSummary />
      </div>
      <div>
        {/*<LocationMap />*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
