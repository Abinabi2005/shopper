import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import Men_banner from './Components/Assets/Mens.png';
import Women_banner from './Components/Assets/Womens.png';
import Kid_banner from './Components/Assets/Kids.png';




function App() {
  return (
    <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={Men_banner} category="mens"/>} />
          <Route path='/womens' element={<ShopCategory banner={Women_banner} category="womens"/>} />
          <Route path='/kids' element={<ShopCategory banner={Kid_banner} category="kids"/>} />
          <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
         </Routes>
         <Footer />
         </BrowserRouter>
         
  );
}

export default App;

