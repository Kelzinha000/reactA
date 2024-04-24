import React from "react";

const Lista = () =>{

const [items,setItems]= React.useState(['item 1','item 2'])
function HandleClick(){
    setItems([...items,"Novo item"])
}
    return(
        <>
     (items.map((item,index)=>(
        <li key={index}>{item}</li>
     )))
     <button onclick={HandleClick} >Adicionar item</button>
     </>
    )
}
 export default Lista;