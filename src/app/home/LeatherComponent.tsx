import { useDevice } from "@/components/DeviceContext"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function LeatherComponent() {
    const componentData_1 = [
        {
            header: "LEATHER",
            image: "/assets/components/leather.png",
            description: "Showcase your leather textures, finishes, and patterns by uploading high-quality images here. Whether it’s grain detail, color samples, or material variations, help us better understand your leather selection. Supported formats: JPG, PNG, and PDF.",
            type:"leather"
        },
        {
            header: "NON-LEATHER",
            image: "/assets/components/non-leather.png",
            description: "Share images of your non-leather materials, including fabric, synthetics, or other alternatives. Upload clear visuals to help us understand texture, color, and finish. Supported formats: JPG, PNG, and PDF.",
            type:"non_leather"
        },
        {
            header: "SOLES",
            image: "/assets/components/sole.png",
            description: "Upload images of your sole materials to showcase design, texture, and type. Helps in accurate evaluation and selection. Supported formats: JPG, PNG, and PDF. ",
            type:"soles"
        },

    ]
    const componentData_2 = [
        {
            header: "REINFORCEMENTS",
            image: "/assets/components/reinforcement.png",
            description: "Add images of reinforcement materials used in your shoe design, such as toe puffs, counters, or shanks. Clear visuals help ensure accurate evaluation and selection. Supported formats: JPG, PNG, and PDF. ",
            type:"reinforcement"
        },
        {
            header: "LACES TAPES",
            image: "/assets/components/laces-tapes.png",
            description: "Upload clear images of your shoelaces or decorative tapes, showcasing color, pattern, and texture for better reference for laces tapes. Supported formats: JPG, PNG, and PDF. ",
            type:"laces"
        },
    ]
    const [isHover_1 , setIshovered_1] = useState<any>(null)
    const [isHover_2 , setIshovered_2] = useState<any>(null)
    const router = useRouter();
    return (
        <div className="flex flex-col gap-6 justify-center bg-white">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {componentData_1.map((item: any, index: any) => (
                    <div key={index} className={`w-[300px] flex flex-col justify-center gap-3 border border-[#999999] shadow-lg  rounded-[20px] p-2 cursor-pointer transform transition-transform duration-300 ease-in-out ${isHover_1 === index ? "scale-105" : "scale-100"} `} onMouseEnter={()=>setIshovered_1(index)} onMouseLeave={()=>setIshovered_1(null)} onClick={()=> router.push(`component?type=${item?.type}`)}>
                        <img src={`${item?.image}`} alt="" className="w-[290px] h-[180px]" />
                        <div className="flex flex-col text-[#222]">
                            <p className="font-semibold text-center">{item?.header}</p>
                            <p className="text-[12px] text-center">{item?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-10 mt-4 bg-white">
                {componentData_2.map((item: any, index: any) => (
                    <div key={index} className={`w-[300px] flex flex-col justify-center gap-3 border border-[#999999] shadow-lg  rounded-[20px] p-2 cursor-pointer transform transition-transform duration-300 ease-in-out ${isHover_2 === index ? "scale-105" : "scale-100"} `} onMouseEnter={()=>setIshovered_2(index)} onMouseLeave={()=>setIshovered_2(null)} onClick={()=> router.push(`component?type=${item?.type}`)}>
                        <img src={`${item?.image}`} alt="" className="w-[290px] h-[180px]" />
                         <div className="flex flex-col text-[#222]">
                            <p className="font-semibold text-center">{item?.header}</p>
                            <p className="text-[12px] text-center">{item?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeatherComponent