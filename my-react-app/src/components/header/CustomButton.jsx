import React,{useState,useContext} from 'react'

import { Box, Button ,styled} from '@mui/material'
import Profile from './Profile';

import {ShoppingCart} from '@mui/icons-material';
import {DataContext} from '../../context/DataProvider'
import LoginDialLog from '../login/LoginDialLog';







const Wrapper=styled(Box)(({theme})=>({
  margin : '0 5% 0 auto',
  display : 'flex',
  '& > *' : {
    marginRight : 50,
    fontSize : 12,
    alignItems : 'center',
    [theme.breakpoints.down('md')]:{
      display : 'none'
    }
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
  
  
  const openDialog=()=>{
    setOpen(true);
  }
 
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} />:
  
     
        <LoginButton variant="contained"  onClick={()=> openDialog()} style={{background : "#FF1493"}} >Login</LoginButton>
      }

      <Box>
       <ShoppingCart style={{color:"pink",marginLeft:"90px"}} />
      </Box>
      <LoginDialLog open={open} setOpen={setOpen} setAccount={setAccount} />
    
    </Wrapper>
  )
}

export default CustomButton;