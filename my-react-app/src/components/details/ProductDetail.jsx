import React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)({
  fontSize: '14px',
  '& > p': {
    fontSize: '14px',
    marginTop: '10px'
  }
});

const StyledBadge = styled(Badge)({
  marginTop: '10px',
  marginRight: '10px',
  color: '#00cc00',
  fontSize: '15px'
});

const ColumnText = styled(TableRow)({
  fontSize: '14px',
  verticalAlign: 'baseline',
  '& > td': {
    fontSize: '14px',
    marginTop: '10px',
    border: 'none'
  }
});

const ProductDetail = ({ product }) => {
  const fassured = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ367QAZSwPUMdEgYe9BJWzjAuXNtKNKJc2sw&usqp=CAU';
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: '5px', color: '#878787', fontSize: '14px', marginLeft: '30px' }}>
        8 Rating & 1 Reviews
        <Box component="span"><img src={fassured} style={{ width: '77px', marginLeft: '20px' }} alt="fassured" /></Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: '28px' }}>₹{product.price.cost}</Box>
        <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>
        <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography><StyledBadge />Get extra 20% off upto ₹50 on 1 item(s) </Typography>
        <Typography><StyledBadge />Get extra 13% off (price inclusive of discount) </Typography>
        <Typography><StyledBadge />Sign up for Nykaa Pay Later and get Nykaa Gift card worth ₹100* Know More</Typography>
        <Typography><StyledBadge />Get extra 10% off upto ₹100 on 1 item(s) </Typography>
        <Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI card on card value above ₹2999 T&C</Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: '600' }}>Delivery by {date.toDateString()} | ₹40 </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: '300px' }} alt="Nykaapoints" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
