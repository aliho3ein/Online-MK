import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import instance from "./api/omApi";
import { aosInit } from "./actions";

/* Reducer Context */
import omReducer from "./reducer/omReducer";
import omContext from "./context/omContext";

/* Style */
import "./styles/main.css";

/* Components */
import Navbar from "./component/navbar";
import Footer from "./component/footer";

/* Pages */
import Home from "./pages/home";
import About from "./pages/about";
import Customer from "./pages/customer";
import Contact from "./pages/contact";
import Manage from "./pages/manage";

function App() {
  let [state, despatch] = useReducer(omReducer, {
    crew: [],
    work: [],
    user: "",
    action: "",
    edit: "",
  });

  useEffect(() => {
    aosInit();
    instance.get(".json").then((res) => {
      despatch({
        type: "start",
        payload: {
          work: Object.entries(res.data.work).map(([key, item]) => {
            return { ...item, key };
          }),
          crew: Object.entries(res.data.crew).map(([key, item]) => {
            return { ...item, key };
          }),
          // user: Object.values(res.data.user),
        },
      });
    });
  }, []);

  return (
    <>
      <a href="#navBar" className="jumpTop">
        <span></span>
      </a>
      <omContext.Provider value={{ state, despatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </omContext.Provider>
      <Footer />
    </>
  );
}

export default App;
