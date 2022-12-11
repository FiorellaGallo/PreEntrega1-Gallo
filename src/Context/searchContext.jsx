import { createContext, useState } from "react";


export const searchContext = createContext();
const ContextProvider = searchContext.Provider;

export function SearchContextProvider(props) {
    const [searchItem, setSearchItem] = useState(false); 


    return(
        <ContextProvider value= {{searchItem,setSearchItem}}>
        {props.children}
        </ContextProvider>
    )
    
}
