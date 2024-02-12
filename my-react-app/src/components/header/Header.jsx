import React,{useState } from 'react';
import { AppBar, Toolbar, styled,Box,Typography, IconButton ,Drawer,List,ListItem} from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
background: white;
height:85px;
border-radius : 1px ;
`;

const Component= styled(Link)`
margin-left : 12%;
line-height:0;
text-decoration:none;
color: inherit
`
const CustomButtonWrapper= styled(Box)(({theme})=>({
 margin:'0 5% 0 auto' ,
 [theme.breakpoints.down('md')]:{
  display:'none'
 }
}))
 
const MenuButton= styled(IconButton)(({theme})=>({
  // display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))



const Header = () => {

  const logoURL= 'data:image/png;base64,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'


  const [open , setOpen]= useState(false)

const handleopen =()=>{
  setOpen(true);
}
const handleclose =()=>{
  setOpen(false);
}

const list = () =>
  (

    <Box style={{width:200}} onClick={handleclose}  >
    <List>
      <ListItem button >
        <CustomButton/>
      </ListItem>
    </List>
  </Box>
    )


  return (
 
    <StyledHeader >

      <Toolbar style={{minHeight:"55px"}} >
        <MenuButton onClick={handleopen} >
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleclose
        } >
          {list()}
          </Drawer>
        <Component to='/' >
          <img src={logoURL} alt="logo" style={{ width: 75}} />
          
        </Component>
         
        <Search/>
        <CustomButtonWrapper>
          <CustomButton/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header;
