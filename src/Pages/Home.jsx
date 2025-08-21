import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import HeroSection from "../Components/Herosection"
import SecondAbout from "../Components/SecondAbout"
import SheaButterProcess from "../Components/SheaProcess"
import Solutions from "../Components/Solutions"



export default function Home() {
    return (
        <section>
            <Navbar />
            <HeroSection />
            <SecondAbout />
            <SheaButterProcess />
            <Solutions />
            <Footer />
        </section>
    )
};