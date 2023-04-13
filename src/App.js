import "./App.css";
import Navbar from "./components/pages/layouts/header/index";
import Footer from "./components/pages/layouts/footer/index";

//ROUTE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes, routesArray } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routesArray.map((item, i) => (
            <Route
              key={i}
              exact
              path={item.path}
              element={
                <div>
                  <Navbar />

                  <item.component />

                  <Footer />
                </div>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
