
function LeatherComponent() {
    const componentData_1 = [
        {
            header: "LEATHER",
            image: "/assets/components/leather.png",
            description: "Showcase your leather textures, finishes, and patterns by uploading high-quality images here. Whether it’s grain detail, color samples, or material variations, help us better understand your leather selection. Supported formats: JPG, PNG, and PDF.",
        },
        {
            header: "NON-LEATHER",
            image: "/assets/components/non-leather.png",
            description: "Share images of your non-leather materials, including fabric, synthetics, or other alternatives. Upload clear visuals to help us understand texture, color, and finish. Supported formats: JPG, PNG, and PDF.",
        },
        {
            header: "SOLES",
            image: "/assets/components/soles.png",
            description: "Upload images of your sole materials to showcase design, texture, and type. Helps in accurate evaluation and selection. Supported formats: JPG, PNG, and PDF. ",
        },

    ]
    const componentData_2 = [
        {
            header: "REINFORCEMENTS",
            image: "/assets/components/reinforcement.png",
            description: "Add images of reinforcement materials used in your shoe design, such as toe puffs, counters, or shanks. Clear visuals help ensure accurate evaluation and selection. Supported formats: JPG, PNG, and PDF. ",
        },
        {
            header: "LACES TAPES",
            image: "/assets/components/laces-tapes.png",
            description: "Upload clear images of your shoelaces or decorative tapes, showcasing color, pattern, and texture for better reference for laces tapes. Supported formats: JPG, PNG, and PDF. ",
        },
    ]
    return (
        <div className="flex flex-col gap-6 justify-center ">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {componentData_1.map((item: any, index: any) => (
                    <div key={index} className="w-[300px] flex flex-col justify-center gap-3 border border-[#999999] shadow-lg h-[400px] rounded-[20px] p-2 ">
                        <img src={`${item?.image}`} alt="" className="w-[290px] h-[170px]" />
                        <p className="font-semibold">{item?.header}</p>
                        <div className="text-[12px]">
                            <p>{item?.description}</p>
                        </div>
                        <button className="px-3 py-1 rounded-lg border border-[#999999] font-semibold mx-3 cursor-pointer">
                            Upload File
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-10 mt-4">
                {componentData_2.map((item: any, index: any) => (
                    <div key={index} className="w-[300px] flex flex-col justify-center gap-3 border border-[#999999] shadow-lg h-[400px] rounded-[20px] p-2 ">
                        <img src={`${item?.image}`} alt="" className="w-[290px] h-[170px]" />
                        <p className="font-semibold">{item?.header}</p>
                        <div className="text-[12px]">
                            <p>{item?.description}</p>
                        </div>
                        <button className="px-3 py-1 rounded-lg border border-[#999999] font-semibold mx-3 cursor-pointer">
                            Upload File
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeatherComponent