import React from "react";

interface ChildNode {
  children?: React.ReactNode;
  className?: string;
  type?: string;
  placeHolder?: string;
  name?: string;
  label?: string;
}

const Input: React.FC<ChildNode> = (props) => {
  return (
    <div className="flex flex-col mt-3">
      <label htmlFor={props.name} className="font-medium">
        {props.label}
      </label>
      <input
        type={props.type}
        className={`${props.className} p-2 border-[0.5px] rounded bg-white placeholder:font-mono placeholder:text-gray-500 text-black font-medium`}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default Input;
