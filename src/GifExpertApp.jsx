import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = ( newCategory ) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);  //Se hace una copia de las categorias ya existentes y al lado se agrega lo nuevo
        
    }
    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory={ onAddCategory } //onNewCategory es una propiedad de nuestro componente
        />
        {
            categories.map((category) =>(
            <GifGrid 
            key={ category }
            category={category}/>
            ))         
        }
        </>
    )
};