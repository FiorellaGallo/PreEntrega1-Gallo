import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailsContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<div style={{ marginTop: "10rem" }}><ItemListContainer /></div>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}></Route>
          <Route path='/detail/:idItem' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

