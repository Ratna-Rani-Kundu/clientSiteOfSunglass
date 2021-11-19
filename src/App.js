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
// import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';

import Purchase from './Pages/Products/Purchase/Purchase';



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
       
         <Route  exact path="/products">
               <Products></Products>
           </Route>
         <PrivateRoute path="/products/:id">
            <Purchase/>
           </PrivateRoute>
         
         <PrivateRoute  path="/dashboard">
            <DashBoard></DashBoard>
           </PrivateRoute>
         <Route path="/explore">
            <ManageProducts/>
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
