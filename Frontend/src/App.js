import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./Layouts";
import {
  AboutUs,
  Accessories,
  Homepage,
  ShopByBrand,
  CustomerSupport,
  Laptop,
  Tablet,
  Phone,
} from "./Screens";

import "./Styles/app.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='screens'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='phone' element={<Phone />} />
          <Route path='tablet' element={<Tablet />} />
          <Route path='laptop' element={<Laptop />} />
          <Route path='accessories' element={<Accessories />} />
          <Route path='shopbybrand' element={<ShopByBrand />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='customersupport' element={<CustomerSupport />} />
        </Routes>
      </div>
      <Footer />

      {/* Long footer */}
      {/* About Component */}
    </div>
  );
}

export default App;
