import React, { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Typography)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 26px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-top: 20px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 600;
`;

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      let totalDiscount = 0;

      cartItems.forEach(item => {
        totalPrice += item.price.mrp;
        totalDiscount += item.price.mrp - item.price.cost;
      });

      setPrice(totalPrice);
      setDiscount(totalDiscount);
    };

    calculateTotal();
  }, [cartItems]);

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
