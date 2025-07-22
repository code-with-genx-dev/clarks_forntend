import React from 'react';
import { Dropdown } from 'primereact/dropdown';

interface DropdownFieldProps {
  field: {
    label?: string;
    fieldName: string;
    options: any[];
    optionLabel?: string;
    optionValue?: string;
    placeholder?: string;
  };
  value: any;
  handleChange: (fieldName: string, value: any) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ field, value, handleChange }) => {
  return (
    <div className="mb-4">
      {field.label && (
        <label className="text-[#222222] text-[14px] font-semibold block mb-1">
          {field.label}
        </label>
      )}
      <Dropdown
        className="border h-9 rounded-[6px] focus:outline px-2 w-full"
        options={field.options || []}
        onChange={(e) => handleChange(field.fieldName, e.value)}
        value={value}
        optionLabel={field.optionLabel || 'label'}
        optionValue={field.optionValue || 'value'}
        placeholder={field.placeholder || 'Select'}
      />
    </div>
  );
};

export default DropdownField;
