import React from "react";
interface Props {
    hideModal:()=>void
}
export const Modal = ({hideModal}:Props) => {
    return <div className="relative">
        {/* OverLay */}
        <div onClick={hideModal} className="fixed top-0 right-0 bottom-0 left-0 bg-[#000000e1] z-[20]" />
        {/* Main Modal */}
        <div className="fixed top-[50%] left-[50%] w-[350px] h-[250px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px] z-[21] translate-x-[-50%] translate-y-[-50%]">
            <iframe
                src="https://www.youtube.com/embed/vMhk-Tt1tXU?si=uqxjZ222AmTdk0gk"
                className="w-full h-full"
            />
        </div>
    </div>
}

export default Modal;