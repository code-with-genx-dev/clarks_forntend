'use client'
import { Response } from '@/utils/common-interfaces';
import { getMethod } from '@/utils/rest-apis';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react'

const ProductView = () => {
    const router = useRouter();

    const uploads = [
        {
            filename: 'Leather material.pdf',
            uploadedBy: 'Dennis',
            date: '12/03/2025',
        },
        {
            filename: 'Design Spec Sheet.pdf',
            uploadedBy: 'Akhil',
            date: '25/04/2025',
        },
        {
            filename: 'Embroidery Styles.pdf',
            uploadedBy: 'Anu',
            date: '21/05/2025',
        },
        {
            filename: 'Tag Design.pdf',
            uploadedBy: 'Rakesh',
            date: '29/05/2025',
        },

        // ... (rest as before)
    ]

    const checkboxGroups = [
        {
            groupLabel: "Main Segment",
            fieldName: "main",
            fields: [
                { fieldName: "leather", label: "Leather" },
                { fieldName: "nonLeather", label: "Non Leather" },
                { fieldName: "soles", label: "Soles" },
                { fieldName: "reinforcements", label: "Reinforcements" },
                { fieldName: "lacesTapes", label: "Laces Tapes" },
            ]
        },
        {
            groupLabel: "Additional Segment",
            fieldName: "additional",
            fields: [
                { fieldName: "seasonedColorPalette", label: "Seasoned Color Palette" },
                { fieldName: "innovation", label: "Innovation" },
                { fieldName: "sustainability", label: "Sustainability and Recycle" },
                { fieldName: "shoeFinishing", label: "Shoe Finishing Implementation" },
            ]
        }
    ];

    const [checkedFields, setCheckedFields] = useState<{ [key: string]: boolean }>({});
    const [products, setProducts] = useState<any>();
    const getProducts = async () => {
        const res: Response = await getMethod("/products/get-product-details")
        if (res.status === "success") {
            setProducts(res?.data)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const handleChange = (fieldName: string) => {
        setCheckedFields((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName],
        }));
    };

    const handleSelectAll = (groupFields: string[]) => {
        const allSelected = groupFields.every((field) => checkedFields[field]);
        const updated: { [key: string]: boolean } = {};
        groupFields.forEach((field) => {
            updated[field] = !allSelected;
        });
        setCheckedFields((prev) => ({
            ...prev,
            ...updated,
        }));
    };

    const [isView, setIsView] = useState<any>()
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
                        <p className='!text-[#222]'>{file.filename}</p>
                    </div>
                    <div>
                        <p className='text-[#999999]'>Uploaded by : {file.uploadedBy}</p>
                        <p className='text-[#999999]'>Uploaded Date : {file.date}</p>
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
                <div className="flex flex-col gap-2">
                    <p className="text-[32px] flex justify-center font-semibold">Explore Uploads.</p>
                    <p className="text-[14px] text-center">This section allows you to view and manage all the files and documents you have uploaded. You can easily search, filter, and download your previous uploads, ensuring quick access to your data whenever needed.</p>
                </div>
            </div>
            <div className='grid grid-cols-4 px-[40px] gap-8'>
                <div className='col-span-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-bold text-[16px]'>{params && typeMap[params]}</p>
                        <button className='px-3 py-1 rounded-[4px] bg-[#0873CD] text-[#fff] cursor-pointer' onClick={() => { router?.push(`/product?type=${params}`); localStorage.setItem("params", params) }} >Upload</button>
                    </div>
                </div>
                {/* <div className='col-span-1'>
                    <p className='flex items-center justify-center gap-x-2 font-semibold text-[18px] pr-16'><i className='pi pi-filter'></i> Filter</p>
                   <div className='flex h-full'>
                    <div>
                         {checkboxGroups.map((group: any) => {
                        const allFields = group.fields.map((f: any) => f.fieldName);
                        const allChecked = allFields.every((f: any) => checkedFields[f]);
                        return (
                            <div key={group.groupLabel} className=' mt-[20px]'>
                                <p className="text-[14px] text-center w-full font-bold bg-gray-200 p-4 uppercase">{group.groupLabel}</p>

                               <div className='block mt-4 pl-5 pr-10'>
                                 <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={allChecked}
                                        onChange={() => handleSelectAll(allFields)}
                                        id='checkbox'
                                        className='w-[20px] h-[20px]'
                                    />
                                    <span className="ml-2">Select all</span>
                                </label>
                               </div>

                                {group.fields.map(({ fieldName, label }: any) => (
                                   <div key={fieldName} className='block mt-2 pl-5 pr-10'>
                                     <label  className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={!!checkedFields[fieldName]}
                                            onChange={() => handleChange(fieldName)}
                                            id='checkbox'
                                            className='w-[20px] h-[20px]'
                                        />
                                        <span className="ml-2">{label}</span>
                                    </label>
                                   </div>
                                ))}
                            </div>
                        );
                    })}
                    </div>
                    <div className='border border-[#DDDDDD]'></div>
                   </div>
                </div>
                <div className='col-span-3'>
                    {
                        Object.entries(upload).map(([key, value]) => {
                            return (
                                <div key={key}>
                                    <p className='font-bold mt-[20px] mb-2 pl-4'>{key}</p>
                                    <div className='grid grid-cols-3 gap-6 px-4'>
                                        {value.map((file, index) => (
                                            <CardCopmponent key={index} file={file} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}
                {uploads.map((file, index) => (
                    <CardCopmponent key={index} file={file} />
                ))}

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
                        <p>No Images</p>
                    </div>

                </Dialog>
            }
        </div>
    )
}

export default ProductView