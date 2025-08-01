import ProductsCard from "../Components/ProductsCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ProductsPage() {
    return(
        <>
        <Navbar />
        <section>
            <ProductsCard />
        </section>
        <Footer />
        </>
    );
}