import ItemList from "./ItemList";
import {useEffect,useState ,useContext} from 'react';
import getItems, { getItemsByCategory } from "../../services/firestore";
import { useParams } from 'react-router-dom';
import "./ItemList.css";
import { searchContext } from '../../Context/searchContext';

function ItemListContainer() {
    const [productsList, setProductsList] = useState(false);
    const { idCategory } = useParams();
    const {searchItem} = useContext(searchContext)


    const getItemsAsync =  async () => {
        console.log(searchItem);
        if (!idCategory) {
            console.log("Ingresa sin category");
            getItems()
            .then((products) => {
                if (searchItem !== false && searchItem !== null && searchItem !== "" && productsList) return handleSearch(products)
                setProductsList(products);
            });  
        }else{
            getItemsByCategory(idCategory)
            .then((products) => {

                console.log("Antes de filtrar",products);
                if (searchItem !== false && searchItem !== null && searchItem !== "" && productsList) return handleSearch(products)
                setProductsList(products);
            }); 
        }

    }

    useEffect(() => {
        getItemsAsync();    
    }, [idCategory, searchItem]);


    function handleSearch(products) {
        if (searchItem !== false && searchItem !== null && searchItem !== "" && productsList) {
            console.log("ingresa al filtrado con:::::", productsList);

                const search = products.filter((item)=> item.name.toLowerCase().includes(searchItem.toLowerCase()));
                console.log("Finaliza filtrado con::::",search);
                setProductsList(search); 
            
        }
    }

    
   

    return (
        <div style={{marginTop:"10rem"}}>
            {idCategory ? "" : <div className="logo-init" ><img src={`${process.env.PUBLIC_URL}/logo-header.png`} style={{width:"100%"}}></img></div>}
            <ItemList productsList={productsList}/>
        </div>
        
    )
}

export default ItemListContainer;