import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WrapperLayout from "./components/WrapperLayout";
import { Home, NotFound, About, Contact } from "./pages";

import "./assets/styles/global.css";

function App() {
  return (
    <Router>
      <WrapperLayout>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </WrapperLayout>
    </Router>
  );
}

export default App;
