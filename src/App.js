import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Maincontent from "./Components/Maincontent";
import Dashboard from "./Components/Dashboard";
import NewsLetter from "./Components/NewsLetter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Maincontent/>
      <Dashboard/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
