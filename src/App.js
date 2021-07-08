import NavBar from "./Components/NavBar";

import HomePage from "./Components/HomePage";
import StoriesPage from "./Components/StoriesPage";
import PodcastPage from "./Components/PodcastPage";

import { BrowserRouter as Router, withRouter, Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter basename='/'>
        <NavBar/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/stories' component={StoriesPage} />
        <Route exact path='/podcast' component={PodcastPage} />
    </HashRouter>
  );
}

export default App;
