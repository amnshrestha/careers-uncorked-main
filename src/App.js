import NavBar from "./Components/NavBar";
import JoinUsModal from "./Components/JoinUsModal";

import HomePage from "./Components/HomePage";
import StoriesPage from "./Components/StoriesPage";
import PodcastPage from "./Components/PodcastPage";
import AboutPage from "./Components/AboutPage";
import BlogsPage from "./Components/BlogsPage";


import { BrowserRouter as Router, withRouter, Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter basename='/'>
        <JoinUsModal/>
        <NavBar/>
        <Route exact path= '/' component={HomePage} />
        <Route path='/stories' component={StoriesPage} />
        <Route path='/podcast' component={PodcastPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/blogs' component={BlogsPage} />

    </HashRouter>
  );
}

export default App;
