
import React from "react"
import Button from "../button";
import styles from "../color/color.module.css"
import { useState } from "react";
interface ChildProps {
 
  div:string[]
  onsaveDive:(newtodo:string)=> string
 
  }

function  Color({ div ,onsaveDive}:ChildProps){
  const [rgb , setRgb]=useState<string>(" ")
    const chooseColor=()=>{
        let r :number=Math.round(Math.random() * (255 - 0) + 0);
        let g :number=Math.round(Math.random() * (255 - 0) + 0);
        let b :number=Math.round(Math.random() * (255 - 0) + 0);
        setRgb(`rgb(${r.toString()},${g.toString()},${b.toString()})`);
        onsaveDive(rgb)
      
        }
return <div>
   
   <Button onClick={chooseColor}/>
</div>
}
export default Color