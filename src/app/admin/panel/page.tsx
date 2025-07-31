import Table from '@/components/Table'
import React from 'react'

const page = () => {
    const card_data = [
        {
            name:"Total Upload",
            image:"/assets/common/uploads.svg"
        },
        {
            name:"Total Approved",
            image:"/assets/common/approved.svg"
        },
        {
            name:"Total Rejected",
            image:"/assets/common/rejected.svg"
        },
        {
            name:"Total Pending",
            image:"/assets/common/pending.svg"
        },
    ]
     const headers: any = [
      { label: "Uploaded Date", key: "k", align: "center", width: "" },
      { label: "Uploaded By", key: "q", align: "center", width: "" },
      { label: "Upload Category", key: "e", align: "left", width: "" },
      { label: "Upload Sub Category", key: "x", align: "center", width: "" },
      { label: "File Name", key: "z", align: "center", width: "" },
      { label: "Upload Status", key: "p", align: "center", width: "" },
      { label: "Action", key: "g", align: "center", width: "" }
    ];
    const Card =({index,data}:any) => {
        return(
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

    return (
        <div>
            <div className="bg-[url('/assets/slide/slide-5.png')] h-[450px] flex justify-center items-center">

            </div>
            <div className="flex items-center justify-center py-[40px] px-[350px]">
                <div className="flex flex-col gap-2">
                    <p className="text-[32px] flex justify-center font-semibold">Manage Uploads.</p>
                    <p className="text-[14px] text-center">This section provides a centralized view to manage all your uploaded files. You can review, organize, rename, delete, or update your uploads to ensure your data stays clean, relevant, and up to date.</p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 mx-5 py-[40px]'>
                {card_data.map((data:any,index:any)=>(
                     <Card key={ index} index={index} data={data}/>
                ))}
            </div>
            <div className='px-5'>
                <Table columns={headers || []} rows={[]}/>
            </div>
            <div className="flex justify-center mt-10">
                <img src="/assets/clarks-footer-logo.png" alt="" />
            </div>
        </div>
    )
}

export default page