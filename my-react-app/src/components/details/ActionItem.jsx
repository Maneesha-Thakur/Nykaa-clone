import React from 'react'
import {Box,Button,styled} from '@mui/material'
import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';


 const LeftContainer= styled(Box)(({theme})=>({
   minWidth:'40%',
   padding: '40px 0 0 80px',
   [theme.breakpoints.down('lg')] : {
     padding: '20px 40px', 
   }

 }))
 

 const Image= styled('img')({
 
   padding:"15px"
 }) 

 const StyButton= styled(Button)(({theme})=>({
   width:"40%",
     height:'50px',
     borderRadius:'2px',
     [theme.breakpoints.down('lg')] : {
       width:"46%"
     },
     [theme.breakpoints.down('sm')] : {
       width:"48%"
     }

 }))
 

const ActionItem = ({product}) => {
  return (
    <LeftContainer>
        <Box style={{padding:'15px 20px',
   border:"1px solid #f0f0f0",  width : "90%",}} >

      <Image src={product.detailUrl} alt="product"  />
        </Box>
    <StyButton style={{backgroundColor:"#ff9f00",marginRight:"12px",color:"white"}} ><Cart/>Add to Cart</StyButton>
    <StyButton style={{backgroundColor:"#fb541b",color:"white"}} > <Flash/>Buy now</StyButton> 
    </LeftContainer>
  )
}

export default ActionItem
