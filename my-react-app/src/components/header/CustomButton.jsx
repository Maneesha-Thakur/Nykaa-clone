import React,{useState,useContext} from 'react'

import { Box, Button ,Typography,styled,Badge} from '@mui/material'
import Profile from './Profile';
import {ShoppingCart} from '@mui/icons-material';
import {DataContext} from '../../context/DataProvider'
import {Link} from 'react-router-dom';
import LoginDialLog from '../login/LoginDialLog';
import { useSelector } from 'react-redux';

const Wrapper=styled(Box)(({theme})=>({
  margin : '0 5% 0 auto',
  display : 'flex',
  '& > *' : {
    marginRight : '40px !important',
    fontSize : 12,
    alignItems : 'center',
    [theme.breakpoints.down('md')]:{
      display : 'none'
    }
  }
}))

const Container = styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration : 'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
      display : 'block'
    }
}))

const LoginButton= styled(Button)`
width : 86px;
text-transform : none;
padding: 5px 40px;
border-radius: 2px;
font-size : 12px;
font-weight: 600;
box-shadow: none;
height: 32px;
`


const CustomButton = () => {

  const [open,setOpen]= useState(false);
  
  const {account,setAccount}= useContext(DataContext)
  
  const {cartItems}= useSelector(state=>state.cart)
  
  const openDialog=()=>{
    setOpen(true);
  }
 
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} />:
  
     
        <LoginButton variant="contained"  onClick={()=> openDialog()} style={{background : "#FF1493"}} >Login</LoginButton>
      }

      <Container to='/cart' >
        <Badge badgeContent={cartItems?.length} color="primary">
       <ShoppingCart style={{color:"pink",marginLeft:"90px"}} />
          </Badge>
          
       <Typography style={{marginLeft:"10px"}} >Cart</Typography>
      </Container>
      <LoginDialLog open={open} setOpen={setOpen} setAccount={setAccount}/>
    
    </Wrapper>
  )
}
export default CustomButton;