// import React, { useState } from 'react';
// import { Box, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer, Typography, useMediaQuery } from '@mui/material';
// import { Home, Settings, Logout, Menu } from '@mui/icons-material';
// import { NavLink } from 'react-router-dom';

// const SideNav = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile responsiveness

//   const toggleSideNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Drawer
//       variant={isMobile ? 'temporary' : 'permanent'} 
//       open={isMobile ? isOpen : true}
//       onClose={toggleSideNav} 
//       sx={{
//         width: isOpen ? 240 : 60,
//         '& .MuiDrawer-paper': {
//           width: isOpen ? 240 : 60,
//           boxSizing: 'border-box',
//           transition: 'width 0.3s ease',
//           overflowX: 'hidden',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: isOpen ? 'flex-end' : 'center',
//           alignItems: 'center',
//           p: 1,
//         }}
//       >
//         <IconButton onClick={toggleSideNav}>
//           <Menu />
//         </IconButton>
//       </Box>
//       <List>
//       <NavLink to={"/home"}>      
//         <ListItem button >
        
//           <ListItemIcon>
//             <Home />
//           </ListItemIcon>
//           {isOpen && <ListItemText primary="Home" />}
//         </ListItem>
//         </NavLink>
//         <NavLink to={"/pagetwo"}>
//         <ListItem button>
//           <ListItemIcon>
//             <Settings />
//           </ListItemIcon>
//           {isOpen && <ListItemText primary="Page Two" />}
//         </ListItem>
//         </NavLink>
//         <NavLink to={"/pageThree"}>
//         <ListItem button>
//           <ListItemIcon>
//             <Settings />
//           </ListItemIcon>
//           {isOpen && <ListItemText primary="Page Three" />}
//         </ListItem>
//         </NavLink>
//         <NavLink to={"/"}>
//         <ListItem button>
//           <ListItemIcon>
//             <Logout />
//           </ListItemIcon>
//           {isOpen && <ListItemText primary="Logout" />}
//         </ListItem>
//         </NavLink>
      
//       </List>
//       {/* {isOpen && (
//         <Box sx={{ flexGrow: 1, p: 2 }}>
//           <Typography variant="caption">© 2024 Your Company</Typography>
//         </Box>
//       )} */}
//     </Drawer>
//   );
// };

// export default SideNav;
