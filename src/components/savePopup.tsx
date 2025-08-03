import React from 'react';
import { Success, Warning } from './icons';

interface SavePopupProps {
    message: string;
    status: 'success' | 'error';
}

const SavePopup: React.FC<SavePopupProps> = ({ message, status }) => {
    return (
        <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
            <div role="alert" className="bg-white p-6 rounded-[12px] shadow-lg w-[250px] animate-popup">
                <div className="flex flex-col gap-4 justify-center items-center">
                    {status === 'success' ? <Success /> : <Warning />}
                    <p className="text-center text-gray-800">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SavePopup;
