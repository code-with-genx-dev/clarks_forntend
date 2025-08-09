'use client'
import { extractFileFromBase64 } from '@/utils/common-function';
import { Response } from '@/utils/common-interfaces';
import { getMethod } from '@/utils/rest-apis';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react'

const ProductView = () => {
    const router = useRouter();
    const [products, setProducts] = useState<any>();
   

    const getProducts = async () => {
        const res: Response = await getMethod(`/products/get-product-details?sub_category=${params}`)
        if (res?.status === "success") {
            setProducts(res?.data)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    const [isMimeType , setIsMimeType] = useState<any>()
    const [isFileUrl , setIsFIleUrl] = useState<any>()
    const [isView, setIsView] = useState<any>()
    useEffect(()=> {
         const {fileName, mimeType, fileUrl} = extractFileFromBase64(products?.leather_image);
         setIsMimeType(mimeType);
         setIsFIleUrl(fileUrl);
    },[isView])

    const searchParams = useSearchParams();
    const params: any = searchParams.get("type");
    const typeMap: Record<string, string> = {
        leather: "LEATHER",
        laces: "LACES TAPES",
        reinforcement: "REINFORCEMENTS",
        soles: "SOLES",
        non_leather: "NON LEATHER"
    }

    const CardCopmponent = ({ file }: any) => {
        return (
            <div className='col-span-1'>
                <div className='flex flex-col gap-y-3 bg-[#F2F2F2] p-3 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <i className='pi pi-file-pdf text-[#EF5350]'></i>
                        <p className='!text-[#222]'>{file.upload_file_name || "Uploaded docs"}</p>
                    </div>
                    <div>
                        <p className='text-[#999999]'>Uploaded by : {file.uploaded_by}</p>
                        <p className='text-[#999999]'>Uploaded Date : {file.uploaded_date}</p>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <button className='flex items-center gap-1 cursor-pointer px-3 py-[2px] rounded-[4px] border border-[#B6B6B6] text-[#B6B6B6]' onClick={() => setIsView(true)}><i className='pi pi-eye text-[#B6B6B6]'></i>View</button>
                        <button className='flex items-center gap-1 cursor-pointer px-3 py-[2px] rounded-[4px] bg-[#0873CD] text-[#fff]'><i className='pi pi-download text-[#fff]'></i>Download</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="bg-[url('/assets/common/explore-upload.svg')] h-[450px] flex justify-center items-center">

            </div>
            <div className="flex items-center justify-center py-[40px] px-[350px]">
                <div className="flex flex-col gap-2 text-[#222]">
                    <p className="text-[32px] flex justify-center font-semibold">Explore Uploads.</p>
                    <p className="text-[14px] text-center">This section allows you to view and manage all the files and documents you have uploaded. You can easily search, filter, and download your previous uploads, ensuring quick access to your data whenever needed.</p>
                </div>
            </div>
            <div className='grid grid-cols-4 px-[40px] gap-8'>
                <div className='col-span-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[16px] text-[#222]' >{params && typeMap[params]}</p>
                        <button className='px-3 py-1 rounded-[4px] bg-[#0873CD] text-[#fff] cursor-pointer' onClick={() => { router?.push(`/product?type=${params}`); localStorage.setItem("params", params) }} >Upload</button>
                    </div>
                </div>

                {products?.length > 0 ?
                    <>
                        {products?.map((file: any, index: any) => (
                            <CardCopmponent key={index} file={file} />
                        ))}
                    </>
                    :
                    <div className='col-span-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <img
                                src="/assets/common/nodata.jpg"
                                alt="No Data"
                                className="mx-auto h-[300px]"
                            />
                            <p>No Data Found</p>
                        </div>
                    </div>
                }

            </div>

            <div className="flex justify-center mt-10">
                <img src="/assets/clarks-footer-logo.png" alt="" />
            </div>
            {
                isView && <Dialog
                    onHide={() => setIsView(false)}
                    visible={isView}
                    style={{ width: '70vw', height: "100vh" }}
                    position='top'
                >
                    <div className='flex justify-center items-center'>
                        {JSON.stringify(isMimeType)}
                        {JSON.stringify(isFileUrl)}
                        {isMimeType === 'application/pdf' ? (
                            <iframe
                                src={`${isFileUrl}#toolbar=0`}
                                style={{ width: '100%', height: '100%' }}
                                title="PDF Preview"
                            />
                        ) : (
                            <div className="flex justify-center items-center">
                                <img
                                    src={isFileUrl}
                                    alt="Preview"
                                    style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                                />
                            </div>
                        )}
                    </div>

                </Dialog>
            }
        </div>
    )
}

export default ProductView