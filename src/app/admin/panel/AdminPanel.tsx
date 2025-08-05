"use client"
import Table from '@/components/Table'
import { Response } from '@/utils/common-interfaces';
import { getMethod, postMethod } from '@/utils/rest-apis';
import React, { useEffect, useState } from 'react'
const AdminPanel = () => {
       const card_data = [
        {
            name: "Total Upload",
            image: "/assets/common/uploads.svg"
        },
        {
            name: "Total Approved",
            image: "/assets/common/approved.svg"
        },
        {
            name: "Total Rejected",
            image: "/assets/common/rejected.svg"
        },
        {
            name: "Total Pending",
            image: "/assets/common/pending.svg"
        },
    ]
    const headers: any = [
        { label: "Uploaded Date", key: "uploaded_date", align: "center", width: "" },
        { label: "Uploaded By", key: "uploaded_by", align: "center", width: "" },
        { label: "Upload Category", key: "upload_category", align: "left", width: "" },
        { label: "Upload Sub Category", key: "upload_sub_category", align: "center", width: "" },
        { label: "File Name", key: "upload_file_name", align: "center", width: "" },
        { label: "Upload Status", key: "upload_status", align: "center", width: "" },
        { label: "Action", key: "edit", align: "center", width: "" }
    ];
    const Card = ({ index, data }: any) => {
        return (
            <div key={index} className='relative col-span-1 bg-[#F1F1F1] rounded'>
                <div className='flex items-center justify-center gap-3 px-6 py-10 text-[#999999]'>
                    <p className=''>{data?.name}</p>
                    <p className='!text-[26px] font-semibold'>80</p>
                </div>
                <div className='absolute -top-10 !z-[1000] left-0'>
                    <img src={`${data?.image}`} height={"80px"} width={"80px"} alt="" className='z-[100]' />
                </div>
            </div>
        )
    }
    const [message, setMessage] = useState<any>()
    const [tableData, setTableData] = useState<any>([]);
    const getProductData = async () => {
        const res: Response = await postMethod("/products/get-product-approval-data",{
            selected_date:"2025-08-01",
            status:["Pending","Approved"],
            filter:{}
        })
        if (res?.status == "success") {
            setTableData(res?.data)
        }
    }
    useEffect(()=>{
        getProductData()
    },[])

  return (
      <div>
            <div className="bg-[url('/assets/common/manage-upload.svg')] h-[450px] flex justify-center items-center">

            </div>
            <div className="flex items-center justify-center py-[40px] px-[350px]">
                <div className="flex flex-col gap-2">
                    <p className="text-[32px] flex justify-center font-semibold">Manage Uploads.</p>
                    <p className="text-[14px] text-center">This section provides a centralized view to manage all your uploaded files. You can review, organize, rename, delete, or update your uploads to ensure your data stays clean, relevant, and up to date.</p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 mx-5 py-[40px]'>
                {card_data.map((data: any, index: any) => (
                    <Card key={index} index={index} data={data} />
                ))}
            </div>
            <div className='mx-5 my-4 bg-[#F6F6F6] p-4 rounded'>
                <div className='flex items-center gap-2 justify-end'>
                    <button className='px-3 py-1 rounded-[4px] bg-[#F3D6D6] text-[#833F3F]   cursor-pointer'> <i className='pi pi-times'></i> Reject</button>
                    <button className='px-3 py-1 rounded-[4px] bg-[#E4F3D6] text-[#60833F] cursor-pointer'> <i className='pi pi-check'></i> Accept</button>
                </div>
            </div>
            <div className='px-5'>
                <Table columns={headers || []} rows={tableData} />
            </div>
            <div className="flex justify-center mt-10">
                <img src="/assets/clarks-footer-logo.png" alt="" />
            </div>
        </div>
  )
}

export default AdminPanel