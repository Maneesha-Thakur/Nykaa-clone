import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography, styled, Button } from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',

  [theme.breakpoints.down('md')]: {
    padding: '15px 0'
  }
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  height: 51px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: '15px',
  [theme.breakpoints.down('md')]: {
    marginBottom: 15
  }
}));

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);

  return (
    <>
      {cartItems && cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} sm={12} md={9} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} sm={12} md={3} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
