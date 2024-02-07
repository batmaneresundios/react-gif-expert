import { useState } from "react";



 export const AddCategory = ( { onNewCategory } ) =>{

    const [inputValue, setInputValue] = useState('One Punch');

    
    const onInputChange = ({ target }) =>{
        setInputValue( target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault(); //Nos aseguramos de que la página no se recargue cuando el formulario se envíe
        if( inputValue.trim().length <=1 ) return; //Validacion para ingresar mas de 1 caracter
        // setCategories(categories => [inputValue, ...categories]); //Guardamos y enviamos la informacion
        setInputValue('');//Se reseta el inputValue luego de enviar caracteres
        onNewCategory( inputValue.trim() );

    }


    return(

        <form onSubmit={(event) => onSubmit(event)}> {/*Toma el argumento y lo manda a la funcion*/}
            <input
                type="text"
                placeholder="Buscar Gifs"    
                value={ inputValue }  
                onChange={ onInputChange }      
            />
        </form>
        

    )


 };