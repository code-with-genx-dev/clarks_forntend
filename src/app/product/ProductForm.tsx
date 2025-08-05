'use client'
import SavePopup from '@/components/savePopup';
import Upload from '@/components/upload';
import { Response } from '@/utils/common-interfaces';
import { postMethod } from '@/utils/rest-apis';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'

const ProductForm = () => {
    const typeMap: Record<string, string> = {
        leather: "LEATHER",
        laces: "LACES TAPES",
        reinforcement: "REINFORCEMENTS",
        soles: "SOLES",
        non_leather: "NON LEATHER"
    }
    const leatherOptions = [
        { label: "Crust", value: "Crust" },
        { label: "Milled / Printed Milled", value: "Milled / Printed Milled" },
        { label: "Novality", value: "Novality" },
        { label: "Nubuck / Oily Nubuck", value: "Nubuck / Oily Nubuck" },
        { label: "Pirgmented / Corrected / Coated", value: "Pirgmented / Corrected / Coated" },
        { label: "Softy Nappa", value: "Softy Nappa" },
        { label: "Suede / Oily Suede", value: "Suede / Oily Suede" },
        { label: "Waxy / Printed Waxy", value: "Waxy / Printed Waxy" },
        { label: "Embossed Plate series", value: "Embossed Plate series" },
        { label: "E catalog", value: "E catalog" }
    ];

    const category_arr = [
        "non_leather", "soles", "reinforcement", "laces", "leather"
    ]


    const searchParams = useSearchParams();
    const params: any = searchParams.get("type");
    const category = category_arr.includes(params) ? "components" : "other segments"
    const router = useRouter();
    const [savePop, setSavePop] = useState<any>();
    const [fieldName, setFileName] = useState<any>()
    const [message, setMessage] = useState<any>();
    const handleUpload = async () => {
        const payload = {
            vendor_name: formData?.vendor_name,
            leather_category: formData?.leather_category || "",
            leather_name: formData?.leather_name || "",
            tannery: formData?.tannery || "",
            tannery_location: formData?.tannery_location || "",
            season_introduced: formData?.season_introduced || "",
            season_price: formData?.season_price || "",
            moq: formData?.moq || "",
            shoe_factories_used: formData?.shoe_factories_used || "",
            style_used: formData?.style_used || "",
            leather_image: formData?.leather_image || null,
            shoe_image: formData?.shoe_image || null,
            leather_file_name: fieldName || "",
            sub_category: params ?? "",
            category: category ?? ""
        }
        const withoutLeatherPayload = {
            leather_image: formData?.leather_image || null,
            leather_file_name: fieldName || "",
            sub_category: params ?? "",
            category: category ?? ""
        }
        console.log(payload)
        const res: Response = await postMethod("/products/save-product", params !== "leather" ? withoutLeatherPayload : payload)
        if (res.status == "success") {
            setMessage(res)
            setSavePop(true)
            setTimeout(async () => {
                setSavePop(false)
                router.push(`/home`)
                localStorage.removeItem("params")
            }, 2000)
        } else {
            setMessage(res)
            setSavePop(true)
            setTimeout(async () => {
                setSavePop(false)
            }, 3000)
        }

    }
    const [formData, setFormData] = useState<any>(
        {
            leather_category: "",
            leather_name: "",
            tannery: "",
            tannery_location: "",
            season_introduced: "",
            season_price: "",
            moq: "",
            shoe_factories_used: "",
            style_used: "",
            leather_image: null,
            shoe_image: null,
        }
    )
    const handleChange = (fieldName: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const bannerMap: Record<string, string> = {
        leather: '/assets/common/form1-banner.svg',
        laces: '/assets/common/form5-banner.svg',
        reinforcement: '/assets/common/form4-banner.svg',
        soles: '/assets/common/form3-banner.svg',
        non_leather: '/assets/common/form2-banner.svg'
    }
    const backgroundImage = params && bannerMap[params] ? `url(${bannerMap[params]})` : "";
    return (
        <div>
            <div className="h-[450px] flex justify-center items-center  bg-cover bg-center" style={{ backgroundImage }}>
                <p className='text-[40px] font-bold text-[#fff] '>{params && typeMap[params]}</p>
            </div>
            {params && typeMap[params] == "LEATHER" &&
                <>
                    <div className='grid grid-cols-6 gap-5 px-[70px] pt-[60px]'>
                        <div className='col-span-2 text-[#222]'>
                            <p className='text-[#222222] text-[16px] font-bold capitalize'>{params && typeMap[params]} Details</p>
                            <p className='text-[#999999] text-[12px]'>Please fill in the details below to provide accurate information about the leather material</p>
                        </div>
                        <div className='col-span-4'>
                            <div className='grid grid-cols-3 gap-6'>
                                <div className='flex flex-col gap-1 col-span-1 '>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Leather category</label>
                                    <Dropdown className='border h-9 rounded-[6px] -pt-6 focus:outline px-2'
                                        options={leatherOptions || []}
                                        onChange={(e) => { handleChange("leather_category", e.target.value) }}
                                        value={formData?.leather_category ?? ""}
                                        optionLabel='label'
                                        optionValue='value'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Leather Name</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("leather_name", e.target.value) }}
                                        value={formData?.leather_name ?? ""}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Tannery</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("tannery", e.target.value) }}
                                        value={formData?.tannery}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1 '>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Tannery Location</label>
                                    {/* <Dropdown className='border h-9 rounded-[6px]   focus:outline px-2'
                                        options={[]}
                                        onChange={(e) => { handleChange("tannery_location", e.target.value) }}
                                        value={formData?.tannery_location ?? ""}
                                    /> */}
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("tannery_location", e.target.value) }}
                                        value={formData?.tannery_location}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Season Introduced</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("season_introduced", e.target.value) }}
                                        value={formData?.season_introduced ?? ""}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Season Price</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='number'
                                        onChange={(e) => { handleChange("season_price", e.target.value) }}
                                        value={formData?.season_price ?? ""}
                                        onWheel={(e) => e.currentTarget.blur()} // Prevent scrolling to change value
                                        onKeyDown={(e) => {
                                            if (["e", "E", "+", "-"].includes(e.key)) {
                                                e.preventDefault(); // Prevent unwanted characters
                                            }
                                        }}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>MOQ if any</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("moq", e.target.value) }}
                                        value={formData?.moq ?? ""}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Shoe factories used</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("shoe_factories_used", e.target.value) }}
                                        value={formData?.shoe_factories_used ?? ""}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 col-span-1'>
                                    <label htmlFor="" className='text-[#222222] text-[14px] font-semibold'>Styles used</label>
                                    <input
                                        className='border h-9 rounded-[6px] border-[#DDDDDD] focus:border-[#DDDDDD] focus:outline focus:outline-[#DDDDDD] px-2'
                                        type='text'
                                        onChange={(e) => { handleChange("style_used", e.target.value) }}
                                        value={formData?.style_used ?? ""}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className='my-10 mx-[70px] border-[#DDDDDD]' />
                </>
            }

            <div className={`grid grid-cols-6 gap-5 px-[70px] ${params && typeMap[params] !== "LEATHER" ? "mt-10" : ""}`}>
                <div className='col-span-2 text-[#222]'>
                    <p className='text-[#222222] text-[16px] font-bold'>Uploads</p>
                    <p className='text-[#999999] text-[12px]'>Upload clear images of the leather material to help us verify its texture, color, and finish.</p>
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-1 col-span-1  '>
                            <label htmlFor="" className='text-[#222222] text-[14px] font-semibold capitalize mb-2'>Uplaod</label>
                            <Upload value={formData?.leather_image} handleChange={(file, base64) => {
                                setFileName(file?.name || "uploaded doc")
                                handleChange("leather_image", base64)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
                <button className='px-3 py-1 rounded-[4px] bg-[#1c1c1d] text-[#fff] cursor-pointer' onClick={() => router.back()} >Back</button>
                <button className='px-3 py-1 rounded-[4px] bg-[#0873CD] text-[#fff] cursor-pointer' onClick={handleUpload} >Upload</button>
            </div>
            <div className="flex justify-center">
                <img src="/assets/clarks-footer-logo.png" alt="" />
            </div>
            {
                savePop &&
                <SavePopup message={message?.message} status={message.status === "success" ? "success" : 'error'} />
            }
        </div>
    )
}

export default ProductForm