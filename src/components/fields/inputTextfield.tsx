import React from 'react'
interface inputProps {
    field: any
    value: any;
    handleChange: (fieldName:any,value: any) => void
}

const InputTextField: React.FC<inputProps> = ({field,value,handleChange}) => {
    return (
        <>
      {field?.label&&<p className='text-[14px] text-[#222222] font-semibold'>{field?.label}</p>}
            <input
                className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                type='text'
                onChange={(e) => { handleChange(field?.fieldName, e.target.value) }}
                value={value}
            />
        </>
    )
}

export default InputTextField