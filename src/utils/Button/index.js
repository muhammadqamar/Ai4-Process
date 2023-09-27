import React from "react";

const Button = ({
  text,
  Icon,
  color,
  bg,
  cta,
  disabled,
  className,
  marginRight,
  type,
}) => {
  return (
    <button
      onClick={() => {
        if (cta) {
          cta();
        }
      }}
      type={type}
      className={`rounded-lg fit-content flex h-[53px] fit-content items-center font-light text-[22px] justify-center leading-8 bg-Gray-100  text-Black px-[16px] py-2 ${bg} ${color} ${className}`}
    >
      {Icon && <span className={`${Icon ? marginRight : "mr-0"}`}>{Icon}</span>}
      {text}
    </button>
  );
};

export default Button;
