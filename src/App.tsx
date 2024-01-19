import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Layout from "./components/Layout";

import { Home, NotFound, About, Projects, Resume, ContactPage } from "./pages";

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}>
            <Route path="id" element={<p>ID</p>}></Route>
          </Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Outlet />
      </Layout>
    </Router>
  );
}

export default App;
