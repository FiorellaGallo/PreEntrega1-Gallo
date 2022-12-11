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
        if (!idCategory) {
            getItems()
            .then((products) => {
                if (searchItem !== false && searchItem !== null && searchItem !== "") return handleSearch()
                setProductsList(products);
            });  
        }else{
            getItemsByCategory(idCategory)
            .then((products) => {

                if (searchItem !== false && searchItem !== null && searchItem !== "") return handleSearch()
                setProductsList(products);
            }); 
        }

    }

    useEffect(() => {
        getItemsAsync();    
    }, [idCategory, searchItem]);


    function handleSearch() {
        if (searchItem !== false && searchItem !== null && searchItem !== "") {
            const newProductList = productsList
            const search = newProductList.filter((item)=> item.name.toLowerCase().includes(searchItem.toLowerCase()));
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