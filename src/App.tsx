import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import WrapperLayout from "./components/WrapperLayout";

import { Home, NotFound, About, ContactPage } from "./pages";

import "./assets/styles/global.css";

function App() {
  return (
    <Router>
      <WrapperLayout>
        <Navigation />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </WrapperLayout>
    </Router>
  );
}

export default App;
