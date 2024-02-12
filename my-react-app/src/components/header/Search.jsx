import { InputBase, Box , List, ListItem, styled} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer= styled(Box)`
background : #F0F0F0;
width : 25%;
height: 50px;
border-radius : 4px;
border: 1px solid transparent;
margin-left : 30%;
display :flex;

`

const InputSearchBas = styled(InputBase)`
color : black;
padding:10px;
width: 80%;
font-size: unset;
`
const ListWeapper = styled(List)`
position : absolute;
background : #FFFFFF;
 color: #000;
  margin-top:36px;
`
const SearchIconWrapper = styled(Box)`
color :grey;
padding : 15px;
`
const Search = () => {

  const [text,setText]= useState('');


  const {products}= useSelector((state)=> state.getProducts)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getProducts())
  },[dispatch])

  const getText= (text)=>{
    setText(text)
  }

  return (
    <SearchContainer>
      <SearchIconWrapper>
      <SearchIcon/>
      </SearchIconWrapper>
        {
          text &&
          <ListWeapper>
            {
              products.filter((item)=>(item.title.longTitle.toLowerCase().includes(text.toLowerCase()))).map((item)=>(
                <ListItem>
                  <Link to={`/product/${item.id}`} onClick={()=>setText('') }  style={{ textDecoration:'none', color:'inherit'}} >
                      
                  {item.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </ListWeapper>
        }
    <InputSearchBas
    placeholder='Search on Nykaa'
    onChange={(e)=> getText(e.target.value)}
    value={text}
    />

    </SearchContainer>
  )
}

export default Search
