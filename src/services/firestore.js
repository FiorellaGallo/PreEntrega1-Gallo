
import { initializeApp } from "firebase/app";
import{getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";
import products from "../asset/data/products";

const firebaseConfig = {
  apiKey: "AIzaSyCXgfMKPGNzIJG3xcanQqVNvBvYxFFpBV8",
  authDomain: "sophiamakeup-105be.firebaseapp.com",
  projectId: "sophiamakeup-105be",
  storageBucket: "sophiamakeup-105be.appspot.com",
  messagingSenderId: "967618934613",
  appId: "1:967618934613:web:e2af094306a8010584a1dc"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore (app);

export  default async function getItems() {
  const collectionProductsRef = collection(DB,"products");
  const documentos = await getDocs (collectionProductsRef);
  const documentsData = documentos.docs.map( doc =>{
    
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return documentsData;
}

export async function getSingleItem(idParams) {
const docRef = doc(DB,"products",idParams);
const docSnapshot = await getDoc(docRef);

return{
  ...docSnapshot.data(),
  id: docSnapshot.id
}
  
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB,"products");
  const queryCat = query(collectionRef, where ("product_type","==", categoryParams))
  const documentos = await getDocs (queryCat);
  const documentsData = documentos.docs.map( doc =>{
    
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB,"orders");
  const docOrder = await addDoc(collectionRef, order);
  console.log(docOrder)
  console.log(docOrder.id)
  
}

export async function exporArrayToFirestore() {
    const productos = products;
    const collectionRef = collection(DB, "products");
    for (let item of productos){
        let docOrder = await addDoc (collectionRef, item)
        console.log(docOrder.id)
    }
    
}