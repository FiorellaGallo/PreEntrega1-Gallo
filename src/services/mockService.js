function getItems (products,idCategory) {
    return new Promise((resolve)=>{
        if (idCategory === undefined) {
            setTimeout(()=>{
                resolve(products);
            },500)
            
        } else {
            setTimeout(()=>{
                let itemsRequested = products.filter(
                    (item) => {
                        
                        return item.product_type === idCategory}

                );
                resolve(itemsRequested); 
            },500);
            
        }
    })
    
}

export function getSingleItem(idParam, products) {
    return new Promise((resolve,reject)=>{
        let itemRequested = products.find((item)=>item.id === Number(idParam));
        if (itemRequested === undefined) reject("Producto no encontrado");
        setTimeout(()=>{
            resolve(itemRequested);
        },500);   
    });   
}

export default getItems;