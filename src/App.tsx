import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WrapperLayout from "./components/WrapperLayout";
import { HomePage, NotFoundPage, AboutPage, ContactPage } from "./pages";

import "./assets/styles/global.css";

function App() {
  return (
    <Router>
      <WrapperLayout>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </WrapperLayout>
    </Router>
  );
}

export default App;
