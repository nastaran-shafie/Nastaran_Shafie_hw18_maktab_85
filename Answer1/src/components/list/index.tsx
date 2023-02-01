
import { useState } from "react";
import styls from "../list/style.module.css"
interface ChildProps {
    items:string[]
  }
function List ({items}:ChildProps){

const b:string[]=items.slice(0,1)

    return (
        <div className={styls.container}>
          {items.map((item) => {
            if(item !== " "){
              return <p style={{backgroundColor:item}} key={item} > {item}</p>;
            }
          })}
        </div>
      );
}
export default List