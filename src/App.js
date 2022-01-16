import { Route, Routes } from "react-router";
import Home from "./pages/Home"
import Project from "./pages/Project"

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects/:projectName" element={<Project />} />
    </Routes>
   </>
  );
}

export default App;
