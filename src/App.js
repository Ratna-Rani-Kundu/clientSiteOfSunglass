// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Products from './Pages/Products/Products/Products';

function App() {
  return (
    <div className="App">
   
     <Router>
     <Switch>
         <Route exact path="/">
               <Home />
           </Route>
         <Route exact path="/home">
               <Home />
           </Route>
         <Route exact path="/products">
               <Products></Products>
           </Route>
         <Route exact path="/reviews">
               <Products></Products>
           </Route>
          
        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
