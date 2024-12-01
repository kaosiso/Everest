import React, { useState } from 'react';
import '../selectDrop/select.css'

const Select =()=>{

   const[isOpenSelect, setisOpenSelect] = useState(false);
   const[selectedIndex, setselectedIndex] = useState(0);
   const[selectedItem, setselectedItem] = useState('All Categories');
  
   const openSelect=()=>{
       setisOpenSelect(!isOpenSelect); 
   }
   const closeSelect=(index, name)=>{
       setselectedIndex(index);
       setisOpenSelect(false); 
       setselectedItem(name);
   }
  return(
    <div className="selectDropWrapper cursor position-relative">
       <span className='openSelect' onClick={openSelect}>{selectedItem}<img src={require("../../assets/images/downArrow.svg")} className="arrow"/> </span>
       {
          isOpenSelect===true &&
          <div className='selectDrop'>
          <div className='searchField'>
            <input type='search'/>
          </div >
          <ul className='searchResults'>
            <li onClick={()=>closeSelect(0,'All Categories')} className={"$(selectedIndex===0 ? 'active' :'')"}>All Categories</li>
            <li onClick={()=>closeSelect(1,'Milk and Diaries')} className={"$(selectedIndex===1 ? 'active' :'')"}>Milk and Diaries</li>
            <li onClick={()=>closeSelect(2,'wines and Drinks')} className={"$(selectedIndex===2 ? 'active' :'')"}>Wines and Drinks</li>
            <li onClick={()=>closeSelect(3,'Clothing and beauty')} className={"$(selectedIndex===3 ? 'active' :'')"}>Clothing and beauty</li>
            <li onClick={()=>closeSelect(4,'Fresh Seafood')} className={"$(selectedIndex===4 ? 'active' :'')"}>Fresh Seafood</li>
            <li onClick={()=>closeSelect(5,'Pet food and toy')} className={"$(selectedIndex===5 ? 'active' :'')"}>Pet food and toy</li>
            <li onClick={()=>closeSelect(6,'Fastfood')} className={"$(selectedIndex===6 ? 'active' :'')"}>Fastfood</li>
            <li onClick={()=>closeSelect(7,'Fastfood')} className={"$(selectedIndex===7 ? 'active' :'')"}>Baking material</li>
            <li onClick={()=>closeSelect(8,'Milk and Diaries')} className={"$(selectedIndex===8 ? 'active' :'')"}>Milk and Diaries</li>
            <li onClick={()=>closeSelect(9,'wines and drinks')} className={"$(selectedIndex===9 ? 'active' :'')"}>Wines and Drinks</li>
            <li onClick={()=>closeSelect(10,'Clothing and beauty')} className={"$(selectedIndex===10 ? 'active' :'')"}>Clothing and beauty</li>
            <li onClick={()=>closeSelect(11,'Fresh Seafood')} className={"$(selectedIndex===11 ? 'active' :'')"}>Fresh Seafood</li>
            <li onClick={()=>closeSelect(12,'Pet food and toy')} className={"$(selectedIndex===12 ? 'active' :'')"}>Pet food and toy</li>
            <li onClick={()=>closeSelect(13,'fastfood')} className={"$(selectedIndex===13 ? 'active' :'')"}>Fastfood</li>
            <li onClick={()=>closeSelect(14,'Baking material')} className={"$(selectedIndex===14 ? 'active' :'')"}>Baking material</li>
            </ul>
    </div>   
       }
                           
    </div>
   
  )
}
export default Select;