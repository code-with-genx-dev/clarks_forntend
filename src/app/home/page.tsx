"use client"
import ProductSlider from "@/components/ProductSlider";
import LeatherComponent from "./LeatherComponent"
import Carousel from "@/components/Carousel";
import AdditionalComponents from "./AdditionalComponents";
const page = () => {
  return (
    <>
      <div className="h-screen">
        {/* header-section */}
        <div className="bg-[url('/assets/slide/slide-5.png')] text-white bg-cover bg-center bg-no-repeat h-[500px] w-full flex items-center pl-24">
          <div>
            <h1 className="font-extrabold text-[34px]">CLARKS MATERIAL</h1>
            <h2 className="font-medium text-[26px]">ONLINE GALLERY</h2>
            <button className="border-white border px-4 py-1 rounded-3xl cursor-pointer mt-2">Reach Out</button>
          </div>
        </div>
        {/* objective-section */}
        <div className="flex items-center justify-center py-[70px] px-[350px]">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] text-center font-semibold">OBJECTIVE.</p>
            <p className="text-[14px] text-center">To build a strong foundation for a materials base that is fit for purpose and offers a wide range of options. Our aim is to support our designer, developer, and sourcing teams through a platform that provides real-time access to certified materials. </p>
            <p className="text-[14px] text-center">We strive to connect the materials world through innovation, transparency, and sustainability, while ensuring workflows remain aligned with a future-focused vision.</p>
          </div>
        </div>
        {/* product-slide-show */}
        <div className="py-[50px]">
          <ProductSlider />
        </div>
        {/* components-section */}
        <div className="flex items-center justify-center py-[70px] px-[350px]">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] text-center font-semibold">COMPONENTS.</p>
            <p className="text-[14px] text-center">Discover the essential building blocks behind every great pair of shoes. Our Shoe Components category offers a comprehensive selection of parts that contribute to comfort, performance, and style. From structural elements to decorative trims, each component plays a vital role in footwear design and functionality.</p>
          </div>
        </div>
        {/* upload-section */}
        <div className="px-[150px] pt-[80px] pb-[30px]" id="component">
          <LeatherComponent />
        </div>
        {/* autoscroll-section */}
        <div className="py-[100px]">
          <Carousel />
        </div>
        {/* additional-segment */}
        <div className="flex items-center justify-center py-[70px] px-[350px]">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] text-center font-semibold">ADDITIONAL SEGMENT.</p>
            <p className="text-[14px] text-center">Our Additional Segments in the shoe category are designed to meet diverse lifestyle needs, fashion preferences, and functional demands. These curated collections go beyond the standard to bring more variety and innovation to your footwear choices. </p>
          </div>
        </div>
        {/* other-components */}
        <div className="px-[150px] pt-[70px] pb-[30px]" id="others">
          <AdditionalComponents />
        </div>
        {/* execellence */}
        <div className="flex items-center justify-center py-[70px] px-[350px]">
          <div className="flex flex-col gap-2">
            <p className="text-[32px] text-center font-semibold">200 Years of Comfort.</p>
            <p className="text-[14px] text-center">For 200 years, we’ve set the standard – and we’re just getting started. In 2025, we honour past and present, proudly commemorating this two-century legacy of innovation and impact through an all-new film, book, museum exhibit, and style collaborations.</p>
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-center">
          <img src="/assets/clarks-footer-logo.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default page