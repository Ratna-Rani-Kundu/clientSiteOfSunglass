// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Products from './Pages/Products/Products/Products';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
   <AuthProvider>
     <Router>
     <Switch>
         <Route exact path="/">
               <Home />
           </Route>
         <Route exact path="/home">
               <Home />
           </Route>
         <PrivateRoute exact path="/products">
               <Products></Products>
           </PrivateRoute>
         <Route exact path="/reviews">
               <Products></Products>
           </Route>
         <Route exact path="/about">
               <Products></Products>
           </Route>
         <Route exact path="/login">
               <Login></Login>
           </Route>
          
         <Route exact path="/register">
              <Register></Register>
           </Route>
          
        </Switch>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
