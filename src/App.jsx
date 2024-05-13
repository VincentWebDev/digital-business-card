import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <Info />
        {/* About and Interests components could have been one component */}
        <div className="content">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
