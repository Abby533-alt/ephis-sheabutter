import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlogsCard from "../Components/BlogsCard";


export default function Blog() {
    return(
        <>
        <Navbar />
        <section>
            <BlogsCard/>
        </section>
        <Footer />
        </>
        
    )
}