import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import history from '../../history';

import {ReactComponent as IconDashboard} from './icons/Icon-dashboard1.svg';
import {ReactComponent as IconMyCourses} from './icons/Icon-mycourses1.svg';
import {ReactComponent as IconTrendingCourses} from './icons/Icon-trendingcourses1.svg';
import {ReactComponent as IconAccount} from './icons/Icon-account1.svg';
import {ReactComponent as IconPurchaseHistory} from './icons/Icon-purchasehistory.svg';
import {ReactComponent as IconHelp} from './icons/Icon-help2.svg';
import {ReactComponent as IconLogout} from './icons/Icon-logout1.svg';

import {ReactComponent as IconCart} from './icons/shopping_cart.svg';
import {ReactComponent as IconNotification} from './icons/notification.svg';


import PayementHistory from '../Purchase_history/purchasehistory';
import LogoWhite from '../nav/LogoWhite.png';
import axios from "axios";

const drawerWidth = 240;

 
const onSubmitlogout = (event) => {

  const headers = {
      "Content-type": "application/text"
  }
  let tok = localStorage.getItem("tkk");
  console.log(tok);
  axios.post('http://localhost:5000/users/logout', { token: tok }).then(res => {

          console.log(res.data);
          
          history.push('/');
          localStorage.clear();

  })


  }
const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
  },
  appBar: {
    opacity: 1,
    background:'linear-gradient(to right top, #2D2D2D 0%, #151314 90%)',
   // width: '80px',
   // marginRight: '1447px',
    
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background:'linear-gradient(to right top, #2D2D2D 0%, #151314 90%)',//top nav opening time
    opacity: 1,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {

    marginLeft: '0px',
  },
  hide: {
    display: 'none',
  },
  button: {
    background: "#AF2F0F",
  },
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: 'linear-gradient( to left bottom, #FF3300, #FFDB00)',// when nav side gets open
    color: 'white',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: 'linear-gradient( to left bottom, #FF3300, #FFDB00)',//icons nav when closed 
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {

    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {

  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
             <div><img id='dashboard_logowhite' src={LogoWhite}/>

             </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <div>
          <List>
            <ListItem button >
              <ListItemIcon>{/*<UserIcon /> */}</ListItemIcon>
              <ListItemText  onClick={()=>history.push('/dashboard')}>Hello Khatri</ListItemText>
            </ListItem>
          </List>
        </div>
        
        <Divider />
        <List>
          
            <ListItem button key="Dashboard" >
              <ListItemIcon onClick={()=>history.push('/dashboard')}>{<IconDashboard /> }</ListItemIcon>
              <ListItemText primary="Dashboard" onClick={()=>history.push('/dashboard')}/>
            </ListItem>
			<ListItem button key="MyCourses" >
              <ListItemIcon onClick={()=>history.push('/mycourses')}>{<IconMyCourses /> }</ListItemIcon>
              <ListItemText primary="My Courses" onClick={()=>history.push('/mycourses')}/>
            </ListItem>
			<ListItem button key="TrendingCourses">
              <ListItemIcon onClick={()=>history.push('/trending')}>{<IconTrendingCourses /> }</ListItemIcon>
              <ListItemText primary="Trending Courses" onClick={()=>history.push('/trending')}/>
            </ListItem>
			<ListItem button key="Account">
              <ListItemIcon onClick={()=>history.push('/account')}>{<IconAccount /> }</ListItemIcon>
              <ListItemText primary="Accounts" onClick={()=>history.push('/account')}/>
            </ListItem>
          <ListItem button key="PurchaseHistory" className={classes.button}>
              <ListItemIcon >{<IconPurchaseHistory /> }</ListItemIcon>
              <ListItemText primary="Payment History" />
            </ListItem>
            <ListItem button key="Cart">
              <ListItemIcon onClick={()=>history.push('/cartLoggedIn')}>{<IconCart /> }</ListItemIcon>
              <ListItemText onClick={()=>history.push('/cartLoggedIn')} primary="Cart"/>
            </ListItem>
            <ListItem button key="Notification">
              <ListItemIcon onClick={()=>history.push('/bell')}>{<IconNotification /> }</ListItemIcon>
              <ListItemText onClick={()=>history.push('/bell')} primary="Notification"/>
            </ListItem>
			<ListItem button key="Help">
              <ListItemIcon onClick={()=>history.push('/help')}>{<IconHelp /> }</ListItemIcon>
              <ListItemText primary="Help" onClick={()=>history.push('/help')}/>
            </ListItem>
			<ListItem button key="LogOut">
              <ListItemIcon onClick={()=>onSubmitlogout()}>{<IconLogout /> }</ListItemIcon>
              <ListItemText primary="Logout" onClick={()=>onSubmitlogout()}/>
            </ListItem>
          
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PayementHistory/>
      </main>
    </div>
  );
}