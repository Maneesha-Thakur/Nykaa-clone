import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { addEllipsis } from '../../utils/common.utils';
import GroupedButtton from './ButtonGroup';
import { removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #388e3c; /* Adjusted button color */
  padding: 8px 16px; /* Adjusted button padding */
`;

const CartItem = ({ item }) => {
  const fAssuredImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ367QAZSwPUMdEgYe9BJWzjAuXNtKNKJc2sw&usqp=CAU';

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    if (id) {
      dispatch(removeFromCart(id));
    } else {
      console.error('Invalid item ID'); // Add error handling for invalid ID
    }
  };

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
        <GroupedButtton />
      </LeftComponent>
      <Box style={{ margin: '20px' }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img src={fAssuredImage} alt="F Assured" style={{ width: 50, marginLeft: 10 }} />
          </Box>
        </SmallText>
        <Typography style={{ margin: '20px 0' }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: '#878787' }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: '#388e3c' }}>
            {item.price.discount}
          </Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
