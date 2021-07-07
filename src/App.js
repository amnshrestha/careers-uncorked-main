import NavBar from "./Components/NavBar";

import IntroCard from "./Components/HomePage/IndividualComponents/IntroCard";
import AboutCard from "./Components/HomePage/IndividualComponents/AboutCard";
import Product from "./Components/HomePage/SubComponents/Product";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <IntroCard/>
      <AboutCard/>
      <Product/>
    </div>
  );
}

export default App;
