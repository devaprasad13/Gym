import React from 'react'
import { useState } from 'react';

import { FaRegTrashAlt } from "react-icons/fa";
export default function () {
    


    // function handlchange()
    // {
    //     const names = ["chennai","mumbai","Tiruppur","varkala","YOu Pradesh"];
    //     const inst = Math.floor(Math.random()*5);
    //     SetUser(names[inst]);
    // }

    // function decrease()
    // {
    //       var a = count-1;
    //       if(a< 0)
    //       {
    //         return alert("you wont decrease further");
    //       }
    //       SetCount(a)
    // }
    // function increase()
    // {
    //      var n = count+1;
        
    //      SetCount(n);
    // }

    // const [count,SetCount] = useState(0);
    // const [user,SetUser] = useState("");
    const [items,SetItems] = useState([{
        id:1,
        checked:true,
        items:'Practice coding'
    },
    {
        id:2,
        checked:false,
        items:'Play Cricket'
    },
    {
        id:3,
        checked:false,
        items:'Learn list'
    }
,{
    id:4,
    checked:false,
    items:'Watching games'
}]);

function handlecheck(id)
{
    const newarray = items.map((n)=>n.id === id ? {...n ,checked:!n.checked}:n);
    SetItems(newarray);
    localStorage.setItem("todo",JSON.stringify(newarray))
}
function handledelete(id)
{
     const listls = items.filter((n)=>(
        n.id != id
     ))
     SetItems(listls)
     localStorage.setItem("todo",JSON.stringify(listls))
}
    return (
        <main>
          {(items.length)?(
          <ul>
            {items.map((n)=>(
                <li className='item' key={n.id}>
                    <input 
                     type='checkbox' 
                     onChange={()=>handlecheck(n.id)}
                      checked={n.checked} >
                    </input>
                   <labels style={(items.checked) ? {textDecoration:'line-through'}:null}  onDoubleClick ={()=>handlecheck(n.id)}>{n.items}</labels>
                   <FaRegTrashAlt 
                     role='button'
                     onClick={()=>handledelete(n.id)}
                     tabIndex='0'
                   />

                </li>

            ))}
          </ul>) : <h1>Your list is EMpty try to some thing </h1>} 
      </main>
    );
}
