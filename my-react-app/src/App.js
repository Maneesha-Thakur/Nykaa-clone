
 
import Header from './components/header/Header';
import Home from './components/Home/Home';

import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';

import {Box} from '@mui/material';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
     <Header/>
     <Box style={{marginTop: 54}} >
      <Routes>

   <Route path='/'element={ <Home/>}/>
   <Route path='/product/:id'element={ <DetailView/>}/>
   
      </Routes>
     </Box>
      </BrowserRouter>
    </DataProvider>
  );
}
  
export default App;
