import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailsContainer/ItemDetailContainer';
import{CartContextProvider} from "./Context/cartContext";
import CartView from './components/CartView/CartView';
import Form from './components/form/Form';
import{SearchContextProvider} from "./Context/searchContext";
import Finalize from './components/Finalize/Finalize';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <SearchContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<div style={{ marginTop: "10rem" }}><ItemListContainer /></div>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:idItem' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartView/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path="/finalize/:idOrder" element={<Finalize />} />
          <Route
              path="*"
              element={<h1>Error 404: The page does not exist</h1>}
            />
        </Routes>
      </BrowserRouter>
      </SearchContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;

