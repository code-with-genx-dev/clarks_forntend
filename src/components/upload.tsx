import React, { useEffect, useState } from 'react';

interface UploadProps {
  value: File | null;
  handleChange: (value: File | null, base64?: string) => void;
}

const Upload: React.FC<UploadProps> = ({ handleChange, value }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (value && value.type.startsWith('image/')) {
      const url = URL.createObjectURL(value);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [value]);

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1];
      handleChange(file, base64String || '');
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setPreviewUrl(null);
    handleChange(null);
  };

  return (
    <div className="border border-dashed border-[#BBBBBB] flex flex-col justify-center items-center rounded-[6px] relative pt-[40px] pb-[20px] w-full max-w-sm mx-auto">
      {!value ? (
        <>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img src="/assets/upload-image.svg" height={80} width={80} alt="upload" />
          </div>
          <p className="text-[#BBBBBB] text-center text-[14px]">Supports JPG, PNG, PDF</p>
        </>
      ) : (
        <div className="mt-2 text-center relative">
          {value.type.startsWith('image/') && previewUrl ? (
            <img
              src={previewUrl}
              alt="preview"
              className="mx-auto mt-2 rounded w-[100px] h-[100px] object-cover"
            />
          ) : (
            <div className="flex items-center justify-center gap-2 text-sm mt-2">
              <img src="/assets/pdf-icon.svg" alt="pdf" width={24} height={24} />
              <p className="truncate max-w-[200px]">{value.name}</p>
            </div>
          )}
          <button
            type="button"
            className="absolute top-0 right-0 text-xs text-red-500 hover:underline"
            onClick={handleCancel}
          >
            ✕ Cancel
          </button>
        </div>
      )}

      <label
        htmlFor="upload-file"
        className="text-[#0873CD] text-center pt-3 text-[14px] cursor-pointer"
      >
        {value ? 'Change File' : 'Browse'}
      </label>

      <input
        id="upload-file"
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          if (file) convertToBase64(file);
          else handleChange(null);
        }}
        className="sr-only"
      />
    </div>
  );
};

export default Upload;
