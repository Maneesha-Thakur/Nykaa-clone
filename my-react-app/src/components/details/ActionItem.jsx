

import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import {post} from '../../utils/paytm'

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px',
  }
}));

const Image = styled('img')({
  padding: '15px'
});

const StyButton = styled(Button)(({ theme }) => ({
  width: '40%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]: {
    width: '46%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%'
  }
}));

const ActionItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity)); // Pass quantity to addToCart action
    navigate('/cart');
  };

  const buyNow = () => {
     let response= payUsingPaytm( { amount: 500, email:"codeforInterview@gmail.com"  })
     let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
     }
     post(information)
  }

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyButton onClick={addItemToCart} style={{ backgroundColor: '#ff9f00', marginRight: '12px', color: 'white' }}>
        <Cart />Add to Cart
      </StyButton>
      <StyButton style={{ backgroundColor: '#fb541b', color: 'white' }} onClick={() => buyNow()} >
        <Flash />Buy now
      </StyButton>
    </LeftContainer>
  );
};

export default ActionItem;
