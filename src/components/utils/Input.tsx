// src/components/utils/Input.tsx
import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: number;
  onChange: (value: number) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border rounded-lg py-1 px-2 bg-slate-900 border-indigo-600 placeholder-gray-400 text-white flex-1 w-20"
    />
  );
};

export default Input;