import ItemList from "./ItemList";
import {useEffect,useState} from 'react';
import getItems, { getItemsByCategory } from "../../services/firestore";
import { useParams } from 'react-router-dom';
import "./ItemList.css";

function ItemListContainer() {
    const [productsList, setProductsList] = useState(false);
    const { idCategory } = useParams();

    const getItemsAsync =  async () => {
        if (!idCategory) {
            getItems()
            .then((products) => {
                setProductsList(products);
            });  
        }else{
            getItemsByCategory(idCategory)
            .then((products) => {
                setProductsList(products);
            }); 
        }
    }

  

    useEffect(() => {
        getItemsAsync();    
    }, [idCategory]);

    return (
        <div style={{marginTop:"10rem"}}>
            {idCategory ? "" : <div className="logo-init" ><img src={`${process.env.PUBLIC_URL}/logo-header.png`} style={{width:"100%"}}></img></div>}
            <ItemList productsList={productsList}/>
        </div>
        
    )
}

export default ItemListContainer;