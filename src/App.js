import { RouterProvider } from "react-router-dom";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Projects from "./components/Projects/Projects";
// import Skills from "./components/Skills/Skills";
import { router } from "./routes/routes";


function App() {
  return (
      <div>
        <RouterProvider router={router}></RouterProvider>
          {/* <Navbar />
          <Home />
          <About/>
          <Skills />
          <Projects />
          <Contact /> */}
      </div>
  );
}

export default App;
