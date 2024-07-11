import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { deliveryInfo } from "@/constraints/homePage";

export default function Delivery() {
    return <div className="pt-[8rem] pb-[3rem]">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <Image src={deliveryInfo.imgSrc} alt={deliveryInfo.imgSrc} width={1000} height={1000} />
            </div>
            <div data-aos="zoom-in" data-aso-delay="200" data-aos-anchor-placement="top-center">
                <h1 className="uppercase text-[30px] md:text-[40px] lg:text[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
                    {deliveryInfo.heading} <span className="text-red-600">{deliveryInfo.spanHeading}</span> {deliveryInfo.endHeading}
                </h1>
                <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
                    {deliveryInfo.description}
                </p>
                {
                    deliveryInfo.services.map((service: any, index: number) => (
                        <div key={index} className={`flex items-center space-x-3 mt-[${service.margin}]`}>
                            {getIcon(service.icon)}
                            <h1 className="text-[18px] text-black font-medium">{service.text}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

function getIcon(iconName: any) {
    switch (iconName) {
        case "RiEBike2Fill":
            return <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />;
        case "IoFastFood":
            return <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />;
        case "BsDoorOpen":
            return <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />;
        default:
            return null;
    }
}

