import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react';

interface UploadProps {
  value: File | null;
  handleChange: (value: File | null, base64?: string) => void;
}

const Upload: React.FC<UploadProps> = ({ handleChange, value }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [isView, setIsView] = useState<boolean>(false);
  const [fileName , setFileName] = useState<any>()

  const convertToBase64 = (file: File) => {
    setFileName(file.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(',')[1] || '';
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setFileType(file.type);
      handleChange(file, base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setPreviewUrl(null);
    setFileType(null);
    handleChange(null);
  };

  return (
    <>
      <div className="border border-dashed border-[#BBBBBB] flex flex-col justify-center items-center rounded-[6px] relative pt-[40px] pb-[20px] w-full max-w-sm mx-auto">
        {!value ? (
          <>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img src="/assets/upload-image.svg" height={80} width={80} alt="upload" />
            </div>
            <p className="text-[#BBBBBB] text-center text-[14px]">Supports JPG, PNG, PDF</p>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2 text-sm mt-2 bg-[#f6f6f6] px-4 py-1 rounded-md">
            <i className="pi pi-file text-blue-500"></i>
            <p className="truncate max-w-[200px] text-blue-500 underline cursor-pointer"
              onClick={() => setIsView(true)}
            >
              {fileName}
            </p>
            <div className="mt-1 cursor-pointer" onClick={handleCancel}>
              <i className="pi pi-times text-red-500"></i>
            </div>
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
          accept=".jpg,.png,.pdf"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            if (file) convertToBase64(file);
            else handleChange(null);
          }}
          className="sr-only"
        />
      </div>

      {isView && previewUrl && (
        <Dialog
          onHide={() => setIsView(false)}
          visible={isView}
          style={{ width: '70vw', height: '100vh' }}
          position="top"
        >
          <>
            {fileType === 'application/pdf' ? (
              <iframe
                src={`${previewUrl}#toolbar=0`}
                style={{ width: '100%', height: '100%' }}
                title="PDF Preview"
              />
            ) : (
              <div className="flex justify-center items-center">
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                />
              </div>
            )}
          </>
        </Dialog>
      )}
    </>
  );
};

export default Upload;
