import NavBar from "./Components/NavBar";

import IntroCard from "./Components/HomePage/IndividualComponents/IntroCard";
import AboutCard from "./Components/HomePage/IndividualComponents/AboutCard";
import Product from "./Components/HomePage/SubComponents/Product";
import ContactCard from "./Components/HomePage/IndividualComponents/ContactCard";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <IntroCard/>
      <AboutCard/>
      <Product/>
      <ContactCard/>
    </div>
  );
}

export default App;
