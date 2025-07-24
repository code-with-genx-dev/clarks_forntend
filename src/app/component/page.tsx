"use client"
import { Dialog } from 'primereact/dialog';
import React, { useState } from 'react'

const page = () => {
    const upload = {
        Leather: [
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
        ],
        NonLeather: [
            {
                filename: 'Fabric Specification.pdf',
                uploadedBy: 'Nisha',
                date: '10/03/2025',
            },
            {
                filename: 'Packaging Design.pdf',
                uploadedBy: 'Rahul',
                date: '22/04/2025',
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
        ],
        Accessories: [
            {
                filename: 'Zipper Catalog.pdf',
                uploadedBy: 'Jeeva',
                date: '02/05/2025',
            },
            {
                filename: 'Button Samples.pdf',
                uploadedBy: 'Lavanya',
                date: '10/05/2025',
            },
            {
                filename: 'Thread Details.pdf',
                uploadedBy: 'Manoj',
                date: '15/05/2025',
            },

        ],
        Documents: [
            {
                filename: 'Purchase Order.pdf',
                uploadedBy: 'Shalini',
                date: '03/06/2025',
            },
            {
                filename: 'Sales Agreement.pdf',
                uploadedBy: 'Raj',
                date: '08/06/2025',
            },
            {
                filename: 'Payment Terms.pdf',
                uploadedBy: 'Sneha',
                date: '14/06/2025',
            },
            {
                filename: 'Import License.pdf',
                uploadedBy: 'Vishal',
                date: '19/06/2025',
            },
            {
                filename: 'Insurance Form.pdf',
                uploadedBy: 'Keerthi',
                date: '25/06/2025',
            },
        ],
        InternalNotes: [
            {
                filename: 'Team Meeting Notes.pdf',
                uploadedBy: 'Dinesh',
                date: '01/07/2025',
            },
            {
                filename: 'Design Feedback.pdf',
                uploadedBy: 'Meera',
                date: '04/07/2025',
            },
            {
                filename: 'Vendor Followup.pdf',
                uploadedBy: 'Balaji',
                date: '07/07/2025',
            },
            {
                filename: 'QC Observations.pdf',
                uploadedBy: 'Sujatha',
                date: '11/07/2025',
            },
            {
                filename: 'Client Call Summary.pdf',
                uploadedBy: 'Naveen',
                date: '17/07/2025',
            },
        ]
    };

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
            <div className="bg-[url('/assets/slide/slide-5.png')] h-[450px] flex justify-center items-center">

            </div>
            <div className="flex items-center justify-center py-[40px] px-[350px]">
                <div className="flex flex-col gap-2">
                    <p className="text-[32px] flex justify-center font-semibold">Explore Uploads.</p>
                    <p className="text-[14px] text-center">This section allows you to view and manage all the files and documents you have uploaded. You can easily search, filter, and download your previous uploads, ensuring quick access to your data whenever needed.</p>
                </div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    {/* <div className='flex items-center gap-2'>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='h-[20px] w-[20px]' height={"10px"} width={"10px"} />
                        <label htmlFor="vehicle1">{"sf"}</label>
                    </div> */}

                    {checkboxGroups.map((group: any) => {
                        const allFields = group.fields.map((f: any) => f.fieldName);
                        const allChecked = allFields.every((f: any) => checkedFields[f]);
                        return (
                            <div key={group.groupLabel} className='pl-10 mt-[20px]'>
                                <h4 className="text-xs font-bold bg-gray-200 p-1 uppercase">{group.groupLabel}</h4>

                                <label className="block mt-2">
                                    <input
                                        type="checkbox"
                                        checked={allChecked}
                                        onChange={() => handleSelectAll(allFields)}
                                    />
                                    <span className="ml-2">Select all</span>
                                </label>

                                {group.fields.map(({ fieldName, label }: any) => (
                                    <label key={fieldName} className="block mt-1">
                                        <input
                                            type="checkbox"
                                            checked={!!checkedFields[fieldName]}
                                            onChange={() => handleChange(fieldName)}
                                        />
                                        <span className="ml-2">{label}</span>
                                    </label>
                                ))}
                            </div>
                        );
                    })}
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
                </div>
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
                    hello

                </Dialog>
            }
        </div>
    )
}

export default page