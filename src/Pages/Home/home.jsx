import Header from "../../Components/Header/header";
import Ancoragem from "../../Components/Ancoragem/ancoragem";
import Hero from "../../Components/Hero/hero";
import SectionJogo from "../../Components/SectionJogo/sectionJogo";
import Venda from "../../Components/VendaTickets/vendaTickets";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";

function Home() {
    return (
        <>
            <Header />
            <Ancoragem />
            <div className="divisor-horizontal"></div>
            <Hero />
            <SectionJogo />
            <Venda />
            <DentroNovidades />
            <Footer />
        </>
    );
}

export default Home;
