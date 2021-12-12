import React, { ReactNode } from "react";

type CardType = {
  children: ReactNode;
  rounded?: boolean;
  border?: boolean;
  padding?: boolean;
  shadow?: boolean;
}

const Card = ({ children, rounded = false, border = false, padding = true, shadow = false }: CardType) => {
  return (
    <div className={`${padding ? 'p-4' : ''} bg-white ${shadow ? 'drop-shadow-xl' : ''}  ${rounded ? 'rounded-lg' : ''} ${border ? 'border border-gray' : ''}`}>
      {children}
    </div>
  )
}
export default Card;