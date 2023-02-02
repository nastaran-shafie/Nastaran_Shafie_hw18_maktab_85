import React from "react";

function Button({
  onClick,
  title,
}: {
  onClick?: React.MouseEventHandler;
  title: string;
}) {
  return <button onClick={onClick}>{title}</button>;
}
export default Button;
