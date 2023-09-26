import React from "react";

const Index = ({ props }) => {
  const {
    text,
    Icon,
    color,
    bg,
    cta,
    border,
    disabled,
    className,
    marginRight,
  } = props;

  return (
    <button
      {...props}
      onClick={() => {
        if (cta) {
          cta();
        }
      }}
      className={`${border} fit-content flex h-[53px] fit-content items-center font-light text-[22px] justify-center leading-8 bg-Gray-100  text-Black  ${bg} ${color} ${className}`}
    >
      {Icon && <span className={`${Icon ? marginRight : "mr-0"}`}>{Icon}</span>}
      {text}
    </button>
  );
};

export default Index;
