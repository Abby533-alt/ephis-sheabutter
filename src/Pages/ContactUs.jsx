import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm"
import ContactInfo from "../Components/Contactinfo"


export default function ContactUs() {
    return (
        <>
        <Navbar />
        <section className="md:py-20 py-10 bg-yellow-50">
            <div className="flex flex-col items-center px-2">
                <h1 className="md:text-5xl text-[#D2A850] font-bold mt-5">GET IN TOUCH</h1>
                <p className="md:text-xl mt-4 text-gray-500">Have questions about our products or want to learn more about our mission? We'd <br /> love to hear from you. Our team is here to help with anything you need.</p>
            </div>
            <ContactForm />
            <ContactInfo />
        </section>
        <Footer />
        </>
    )
}