import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import arrow from './arrow.png';
import './conceptcover.css';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
export default function Conceptcover() {
  return (
    <div id="intern_concept_main">
      <div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
          1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
          </Button>
          <Menu class="concept_menu1" {...bindMenu(popupState)}>
            <MenuItem class="concept_menu" onClick={popupState.close}>Help us build ML model ,understand data and pre-processing,usage of Classification,regression,AzureML Cheat Sheet</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
    <div>
<PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
  <React.Fragment>
    <Button variant="contained" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
    1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
    </Button>
    <Menu class="concept_menu1" {...bindMenu(popupState)}>
    <MenuItem class="concept_menu" onClick={popupState.close}>Rishu Rawat(Rishabh)-10717210039-Cse-B badwa hai </MenuItem>

    </Menu>
  </React.Fragment>
)}
</PopupState>
</div>
<div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
          1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
          </Button>
          <Menu class="concept_menu1" {...bindMenu(popupState)}>
            <MenuItem class="concept_menu" onClick={popupState.close}>Help us build ML model ,understand data and pre-processing,usage of Classification,regression,AzureML Cheat Sheet</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
    <div>
<PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
  <React.Fragment>
    <Button variant="contained" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
    1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
    </Button>
    <Menu class="concept_menu1" {...bindMenu(popupState)}>
    <MenuItem class="concept_menu" onClick={popupState.close}>Rishu Rawat(Rishabh)-10717210039-Cse-B badwa hai </MenuItem>

    </Menu>
  </React.Fragment>
)}
</PopupState>
</div>
<div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
          1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
          </Button>
          <Menu class="concept_menu1" {...bindMenu(popupState)}>
            <MenuItem class="concept_menu" onClick={popupState.close}>Help us build ML model ,understand data and pre-processing,usage of Classification,regression,AzureML Cheat Sheet</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
    <div>
<PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
  <React.Fragment>
    <Button variant="contained" color="primary" class="concept_cover_button" {...bindTrigger(popupState)}>
    1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
    </Button>
    <Menu class="concept_menu1" {...bindMenu(popupState)}>
    <MenuItem class="concept_menu" onClick={popupState.close}>Rishu Rawat(Rishabh)-10717210039-Cse-B badwa hai </MenuItem>

    </Menu>
  </React.Fragment>
)}
</PopupState>
</div>
    </div>
  );
}
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';
// import './conceptcover.css';
// import arrow from './arrow.png';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

// export default function Conceptcover() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <div id="intern_concept_main">
  
//         <Button class="concept_cover_button"
//           ref={anchorRef}
//           aria-controls={open ? 'menu-list-grow' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
//         </Button>
//         <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                     <MenuItem class="concept_menu" onClick={handleClose}>Help us build ML model ,understand data and pre-processing,usage of Classification,regression,AzureML Cheat Sheet</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>


//         <Button class="concept_cover_button"
//           ref={anchorRef}
//           aria-controls={open ? 'menu-list-grow' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           1. Azure Machine Learning<span><img class="concept_image" src={arrow}/></span>
//         </Button>
//         <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                     <MenuItem class="concept_menu" onClick={handleClose}>rishu rawat badwa hai</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
        
        
//       </div>
    
//   );
// }