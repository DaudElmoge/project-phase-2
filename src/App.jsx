import React from "react";
import Header from "./assets/components/Header";
import AdSection from "./assets/components/AdSection";
import RouteDisplay from "./assets/components/RouteDisplay";
import BookingForm from "./assets/components/BookingForm";
import BookingList from "./assets/components/BookingList";
//import LocationMap from "./assets/components/LocationMap";
//import Footer from "./assets/components/Footer";

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
        {/*<LocationMap />*/}
      </div>
      {/* <Footer />*/}
    </div>
  );
}

export default App;
