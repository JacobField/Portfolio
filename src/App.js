import "./App.css";
import VantaComponent from "./comps/VantaComponent";
import { Projects } from "./comps/Projects";
import { About } from "./comps/About";
import { Footer } from "./comps/Footer";
import { Navbar } from "./comps/NavBar";
function App() {
  return (
    <div className="appContainer">
      <Navbar></Navbar>
      <VantaComponent></VantaComponent>
      <div className="overlay-content">
        <h1 style={{ fontSize: "45px" }}>Jacob Field</h1>

        <h2 className="skyTheLimit" style={{ fontSize: "25px" }}>
          The sky's the limit...
        </h2>
      </div>

      <div className="underneath">
        <About></About>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

// - Continue working on components for Portfolio
//        - Next step: Style each individual Proj component so that it displays nicely
//        - Create NavBar
//        - Create About section
//        - Create footers / contact section
//        - Style scroll bar
