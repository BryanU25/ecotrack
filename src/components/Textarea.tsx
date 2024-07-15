import React, { FC } from "react";

/* eslint-disable no-unused-vars, no-undef*/
type TextareaProps = {
  cols?: number;
  id?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value?: string;
  isDisabled?: boolean;
  defaultValue?: string;
  label?: string;
};
/* eslint-enable no-unused-vars, no-undef */
const Textarea: FC<TextareaProps> = ({
  cols,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  rows = 4,
  required = false,
  value,
  isDisabled,
  defaultValue,
  label,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className={`text-sm text-black font-semibold ${
            required
              ? 'after:content-["*"] after:text-red-400 after:ml-0.5'
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <textarea
        disabled={isDisabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        rows={rows}
        cols={cols}
        required={required}
        className="w-full placeholder-darkGray rounded-[15px] border border-darkGray bg-white px-[10px] py-2 text-black focus:border-purple-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-30 "
      />
    </div>
  );
};

export default Textarea;
