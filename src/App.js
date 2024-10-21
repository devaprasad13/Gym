
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import First from "./FrontendGym/FIrst";
import Register from "./FrontendGym/Register";
import Loginpage from "./FrontendGym/Loginpage";
function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<First/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Loginpage/>}></Route>
      </Routes>
    </>
  )
}

export default App;
