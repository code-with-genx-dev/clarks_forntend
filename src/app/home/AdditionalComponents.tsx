import { useState } from "react"

function AdditionalComponents() {
    const componentData_1 = [
        {
            header: "SEASONED COLOR PALETTE",
            image: "/assets/other-components/color.svg",
            description: "Submit images that represent your seasoned color tones and finishes. This helps us visualize your preferred color range and design aesthetics. Supported formats: JPG, PNG, and PDF. ",
        },
        {
            header: "INNOVATION",
            image: "/assets/other-components/innovative.png",
            description: "Share images of new or unique materials that showcase your innovations in design, sustainability, or technology. Help us explore cutting-edge ideas through clear, detailed visuals. Supported formats: JPG, PNG, and PDF. ",
        },
        {
            header: "SUSTAINABILITY AND RECYCLE",
            image: "/assets/other-components/recycle.png",
            description: "Share images of eco-friendly or recycled materials to highlight your commitment to sustainability.Supported formats: JPG, PNG, and PDF. ",
        },
        {
            header: "SHOE FINISHING IMPLEMENTATION ",
            image: "/assets/other-components/finishing.svg",
            description: "Share images showcasing finishing details like polishing, edge treatments, textures, or final touches applied to the shoes. Supported formats: JPG, PNG, and PDF. ",
        },

    ]
    const [isHover , setIsHover] = useState<any>(null)
    return (
        <div className="grid grid-cols-2 gap-8 bg-white">
            {componentData_1.map((item: any, index: any) => (
                <div key={index} className={`flex items-center gap-3 border border-[#999999] shadow-lg  rounded-[20px] p-3 transform transition-transform duration-300 ease-in-out ${isHover === index ? "scale-105" : "scale-100"} `}  onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>
                    <img src={`${item?.image}`} alt="" className="w-[290px] h-[170px]" />
                   <div className="flex flex-col gap-2 text-[#222]">
                     <p className="font-semibold">{item?.header}</p>
                    <div className="text-[12px] text-[#222]">
                        <p>{item?.description}</p>
                    </div>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default AdditionalComponents