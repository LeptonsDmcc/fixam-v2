import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  htmlFor: string;
}
const RadioInput = ({ text, htmlFor, ...rest }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        {...rest}
        id={htmlFor}
        name="radio"
        className="peer input-radio"
        hidden
      />
      <label
        htmlFor={htmlFor}
        className="h-5 w-5 inline-block border-[1.5px] border-gray-700 duration-200 peer-checked:border-orange-400 rounded-full relative"
      >
        <div
          className="h-[10px] w-[10px] rounded-full bg-orange-400 absolute 
              left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 scale-0 
              duration-200"
        ></div>
      </label>

      {text && <label htmlFor={htmlFor}>{text}</label>}
    </div>
  );
};

export default RadioInput;
