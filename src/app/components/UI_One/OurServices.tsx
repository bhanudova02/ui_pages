export function OurServices() {
    return (
        <div>
           <section>
    <div className="w-[80%] mx-auto py-16">
        <div className="flex flex-col items-center justify-center w-full py-10">
            <h1 className="font-semibold custom-gray-800 text-3xl text-white">Our Services</h1>
            <div className="w-24 h-1 mt-1 bg-yellow-600 rounded-full" />
        </div>
        <div className="lg:flex items-center justify-between lg:-mx-5">
            <div className="w-full px-0 lg:w-1/3 lg:px-5">
                <div className="bg-gray-300 flex justify-center items-center flex-col border-gray rounded-md p-8">
                    <img className="mb-4 w-20" src="/images/football_1099794.png" alt="Football Training" />
                    <h2 className="text-2xl font-bold mb-6 clr-dark-blue text-center lg:text-left">Football Training</h2>
                    <p className="lg:w-2/3 mb-6 text-center">Join our expert-led football training sessions and improve your skills.</p>
                    <a className="clr-dark-blue underline cursor-pointer">View more</a>
                </div>
            </div>
            <div className="w-full px-0 lg:w-1/3 lg:px-5 py-8 lg:py-0">
                <div className="bg-yellow-900 shadow-lg text-white flex justify-center items-center flex-col border-gray rounded-md p-8">
                    <img className="mb-4 w-20" src="/images/soccer-player_919471.png" alt="Match Day Experience" />
                    <h2 className="text-2xl font-bold mb-6 text-white text-center lg:text-left">Match Day Experience</h2>
                    <p className="lg:w-2/3 mb-6 text-center text-white">Experience the thrill of match days with exclusive access and perks.</p>
                    <a className="text-white underline cursor-pointer">View more</a>
                </div>
            </div>
            <div className="w-full px-0 lg:w-1/3 lg:px-5">
                <div className="bg-gray-300 flex justify-center items-center flex-col border-gray rounded-md p-8">
                    <img className="mb-4 w-20" src="/images/football_1099794.png" alt="24/7 Support" />
                    <h2 className="text-2xl font-bold mb-6 clr-dark-blue text-center lg:text-left">24/7 Support</h2>
                    <p className="lg:w-2/3 mb-6 text-center">We provide round-the-clock support to all our football enthusiasts.</p>
                    <a className="clr-dark-blue underline cursor-pointer">View more</a>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}