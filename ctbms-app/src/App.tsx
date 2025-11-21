import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetails from "./pages/Event-Details";
import ContactUs from "./pages/Contact-Us";
import "../src/assets/css/index.css";
import "../src/assets/css/globals.css";
import FooterComponent from "./components/common/FooterComponent";
import HeaderComponent from "./components/common/HeaderComponent";

function App() {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    // your custom logic before redirect
    console.log("Redirecting to:", path);
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
