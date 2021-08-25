import "./css/App.css";
import "./css/props.css";
import Discover from "./screen/Discover";
import Categories from "./screen/Categories";
import Sidebar from "./screen/Sidebar";
import "./fontforme/css/all.min.css";
import Home from "./screen/Home";
// import RightBar from "./screen/RightBar";
// import Oauth from "./screen/Oauth";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Course from "./screen/Course";
import MyCourses from "./screen/MyCourses";

function App() {
  // <Oauth/> <Course />
  <Discover />
  return (
    <div className="App flex">
      <HashRouter>
        <Sidebar />
        <div className="app-content">
          <Route exact path="/" component={Home} />
         
           <Route path="/course/:id" component={Course } />
          <Route path="/Discover/" component={Discover} />
          <Route path="/Categories/" component={Categories} />
          <Route path="/Mycourses/" component={MyCourses } />
          
        </div>
      
      </HashRouter>
    </div>
  );
}

export default App;
