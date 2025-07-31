import Image from 'next/image'
import React from 'react'
import { Success, Warning } from './icons'
interface savepop {
    message:string
    status:string
}
const SavePopup:React.FC<savepop> = ({message,status}) => {
    return (
        <div className="fixed inset-0 bg-black/10 blur-2xl flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-[12px] shadow-lg w-[250px]  transform transition-all duration-300 scale-95 opacity-0 animate-popup">
              <div className='flex flex-col gap-4 justify-center items-center'>
              {status == "success" ? <Success/> : <Warning/>}
              <p>{message}</p>
              </div>
            </div>
        </div>
    )
}

export default SavePopup