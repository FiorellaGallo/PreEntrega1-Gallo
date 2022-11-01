import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header >
       <NavBar/>
       </header>
       <div style={{marginTop:"22rem"}}>
        <ItemListContainer greeting="WELCOME"/>
       </div  >
    </div>
  );
}

export default App;
