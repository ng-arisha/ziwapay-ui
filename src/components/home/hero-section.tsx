import { ArrowRight } from "lucide-react"
import Link from "next/link"

function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-40 lg:px-80 2xl:px-[30rem] py-20 bg-secondary/10 " id="home">
            <h1 className="text-3xl md:text-6xl max-w-4xl text-center text-accent font-bold pb-5">Smart Payments for <span className="text-secondary">African Merchants</span></h1>
            <p className="text-center  mx-auto lg:px-10 lg:max-w-lg 2xl:max-w-lg text-xl py-4 lg:pb-12">Accept M-PESA, cards, and bank transfers with one simple solution. Get paid faster, track sales better, and grow your business with ZiwaPay.</p>

            <div className="flex flex-col space-y-2 lg:flex-row justify-between items-center w-full max-w-2xl">
                <Link href="" className="btn bg-secondary text-white flex space-x-2 font-semibold text-lg px-8 py-6 rounded-full hover:bg-transparent hover:text-dark hover:transition hover:delay-150 hover:duration-300 hover:scale-105  hover:ease-in-out">
                <span>Start Accepting Payments</span>
                <ArrowRight size={24} className="" />
                </Link>
                <Link href="" className="btn bg-accent  text-primary font-semibold text-lg px-8 py-6 hover:bg-transparent hover:border hover:border-accent hover:text-dark transition duration-300 rounded-full">Watch Demo</Link>
            </div>
        </div>
    )
}

export default HeroSection
