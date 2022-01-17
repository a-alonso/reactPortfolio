import { Route, Routes } from "react-router";
import Nav from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { combineWrappers } from "./core/components"

const ContentWrapper = combineWrappers(Nav.Wrapper, Footer.Wrapper)

function App() {
  return (<>
    <Routes>
      <Route path="portfolio" element={
        <Footer.Wrapper>
          <Home />
        </Footer.Wrapper>
      } />
      <Route path="project/:projectName" element={
        <ContentWrapper>
          <Project />
        </ContentWrapper>
      } />
    </Routes>
   </>
  );
}

export default App;
