import logo from './logo.svg';
import './App.css';
import Search from './Components/search'
import Catalog from './Views/Catalog';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Navbar/>
       <Switch>
         <Route path="/catalog/:id">
           <Catalog/>
         </Route>
       </Switch>
    </Router>
    
  );
}

export default App;
