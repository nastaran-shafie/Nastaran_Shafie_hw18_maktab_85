import React from "react";



function Button({ onClick }: { onClick? : React.MouseEventHandler }) {
  return <button onClick={onClick}>Add a color</button>;
}
export default Button;
