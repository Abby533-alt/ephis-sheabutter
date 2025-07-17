import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import HeroSection from "../Components/Herosection"
import AboutUs from "../Components/AboutUs"
import SecondAbout from "../Components/SecondAbout"

export default function Home() {
    return (
        <section>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <SecondAbout />
            <Footer />
        </section>
    )
};