import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from "../../../hooks/useAuth"
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import AddProduct from "../AddProduct/AddProduct"
import Review from '../../Home/Review/Review';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin,logout}=useAuth()
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      {admin? <div>
         <Link style={{textDecoration:'none'}} to={`${url}/addProduct`}>  <Button variant="text"><AddCircleOutlinedIcon/>Add A Product</Button> </Link><br/>
      <Link style={{textDecoration:'none'}}    to={`${url}/manageProduct`}><Button variant="text"><AccountBalanceWalletTwoToneIcon/>Manage Product</Button></Link><br/>
      <Link style={{textDecoration:'none'}}    to={`${url}/manageAllProduct`}><Button variant="text"><AccountBalanceWalletTwoToneIcon/>Manage All Product</Button></Link><br/>
      <Link style={{textDecoration:'none'}}    to={`${url}/makeAdmin`}><Button variant="text"><AdminPanelSettingsIcon/>Make Admin</Button> </Link><br/>
      <Button variant="contained" onClick={logout}>Log Out</Button>
      </div>: <div>
      <Link style={{textDecoration:'none'}} to={`${url}/pay`}>         <Button variant="text"><PaymentIcon/>Payment </Button> </Link><br/>
      <Link style={{textDecoration:'none'}} to={`${url}/myOrder`}> <Button variant="text"><AddShoppingCartIcon/> My Order</Button> </Link><br/>
      <Link style={{textDecoration:'none'}} to={`${url}/review`}>   <Button variant="text"></Button><ReviewsIcon/> Review</Link><br/>
      <Button variant="contained" onClick={logout}>Log Out</Button>
      </div> }
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <MakeAdmin/>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
        <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
      <AddProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
        <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllProduct`}>
        <MakeAdmin/>
        </AdminRoute>
        <Route path={`${path}/review`}>
       <Review/>
        </Route>
        <Route path={`${path}/pay`}>
        <Payment/>
        </Route>
        <Route path={`${path}/myOrder`}>
        <MakeAdmin/>
        </Route>
        {/* <Route path={`${path}/addproduct`}>
        <MakeAdmin/>
        </Route>
        <Route path={`${path}/manageProduct`}>
        <MakeAdmin/> */}
        {/* </Route> */}
      </Switch>
        
      </Box>
    </Box>
    </>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
