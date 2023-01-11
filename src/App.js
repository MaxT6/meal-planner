import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Meals from "./components/Meals";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" exact element={<Hero />}/>
          <Route path="/meals" exact element={<Meals />}/>
        </Routes>
      </>
    </Router>
    // <div>
    //   <Hero />
    // </div>
   
  );
}

export default App;
