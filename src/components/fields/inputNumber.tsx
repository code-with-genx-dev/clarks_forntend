import React from 'react';

interface NumberInputFieldProps {
  field: {
    label?: string;
    fieldName: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
  };
  value: any;
  handleChange: (fieldName: string, value: any) => void;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({ field, value, handleChange }) => {
  return (
    <div className="mb-4">
      {field.label && (
        <label htmlFor={field.fieldName} className="text-[#222222] text-[14px] font-semibold block mb-1">
          {field.label}
        </label>
      )}
      <input
        id={field.fieldName}
        className="border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2 w-full"
        type="number"
        value={value}
        placeholder={field.placeholder || ''}
        onChange={(e) => handleChange(field.fieldName, e.target.value)}
        min={field.min}
        max={field.max}
        step={field.step}
      />
    </div>
  );
};

export default NumberInputField;
