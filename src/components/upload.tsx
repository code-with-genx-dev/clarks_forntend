import React, { useEffect, useState } from 'react';

interface UploadProps {
    value: File | null;
    handleChange: (value: File | null) => void;
}

const Upload: React.FC<UploadProps> = ({ handleChange, value }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    useEffect(() => {
        if (value && value.type.startsWith('image/')) {
            const url = URL.createObjectURL(value);
            setPreviewUrl(url);

            return () => URL.revokeObjectURL(url); // cleanup on unmount or value change
        } else {
            setPreviewUrl(null);
        }
    }, [value]);

    return (
        <div className='border border-dashed border-[#BBBBBB] flex flex-col justify-center items-center rounded-[6px] relative pt-[40px] pb-[20px]'>
            {!value ? (
                <>
                    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2'>
                        <img src="/assets/upload-image.svg" height={80} width={80} alt="upload" />
                    </div>
                    <p className='text-[#BBBBBB] text-center text-[14px]'>Supports JPG, PNG, PDF</p>
                </>
            ) : (
                <div className="mt-2 text-sm text-center">
                    {value.type.startsWith('image/') && previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="preview"
                            className="mx-auto mt-2 rounded"
                            height="100px"
                            width="100px"
                        />
                    ) : (
                        <p>{value.name}</p>
                    )}
                </div>
            )}
            <label htmlFor="upload-file" className='text-[#0873CD] text-center pt-3 text-[14px] cursor-pointer'>
                Browse
            </label>
            <input
                id="upload-file"
                type="file"
                accept=".jpg,.png,.pdf"
                onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleChange(file);
                }}
                className="sr-only"
            />
        </div>
    );
};

export default Upload;
