import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailsContainer/ItemDetailContainer';
import{CartContextProvide} from "./Context/cartContext";
import CartView from './components/CartView/CartView';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <CartContextProvide>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<div style={{ marginTop: "10rem" }}><ItemListContainer /></div>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:idItem' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartView/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvide>
    </div>
  );
}

export default App;

