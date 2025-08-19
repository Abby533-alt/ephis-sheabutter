import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm"
import ContactInfo from "../Components/Contactinfo"


export default function ContactUs() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <section className="md:py-20 py-10 bg-[#fcf4ec] mt-10">
                <div className="px-4 md:px-15 mb-7">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm md:text-md text-white flex items-center justify-center gap-2 h-8 w-20 rounded-full bg-amber-800 hover:text-amber-300 cursor-pointer"
                    >
                        ← Back
                    </button>
                </div>
                <div className="flex flex-col items-center px-2">
                    <h1 className="md:text-4xl text-[#271c04] font-bold">GET IN TOUCH</h1>
                    <p className="md:text-xl mt-4 text-gray-700">Have questions about our products or want to learn more about our mission? We'd <br /> love to hear from you. Our team is here to help with anything you need.</p>
                </div>
                <ContactInfo />
            </section>
            <Footer />
        </>
    )
}