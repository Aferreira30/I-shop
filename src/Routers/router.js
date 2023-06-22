import {Routes,Route} from "react-router-dom";

import Home from "../Pages/Home";
import PayPage from "../Pages/InfoPages";




const Routers =( ) =>{
  return(
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/paysucess" element={<PayPage />}/>
   
      </Routes>
  )
}
export default Routers;