import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import TripPlannerPage from "./pages/TripPlannerPage.jsx";
import CulturalGuide from "./pages/CulturalGuide.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <main className="min-h-screen px-4 py-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/trip-planner" element={<TripPlannerPage />} />
            <Route path="/cultural-guide" element={<CulturalGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;