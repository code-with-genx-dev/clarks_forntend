import React from 'react';
import { Success, Warning } from './icons';

interface SavePopupProps {
    message: string;
    status: 'success' | 'error';
}

const SavePopup: React.FC<SavePopupProps> = ({ message, status }) => {
    return (
        <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
            <div role="alert" className="bg-white p-6 rounded-[12px] shadow-lg w-[300px] relative animate-popup">
                <div className='flex justify-center items-center bg-white p-[6px] rounded-full border-black/10 border-[6px] absolute -top-10 left-[35%]'>
                    {status === 'success' ? <Success /> : <Warning />}
                </div>
                <div className="flex flex-col gap-3 justify-center items-center mt-8">
                    <p className='text-[#444444] font-bold'>{status == "success" ? "Success" : "Error"}</p>
                    <p className="text-center text-[#999999]">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SavePopup;
