import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import Hero from "../../Components/Hero/hero";
import Venda from "../../Components/VendaTickets/vendaTickets";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import { AppContainer } from "../../App";

function Home() {
    return (
        <AppContainer>
            <Header/>
            <Nav/>
            <div className="divisor-horizontal"></div>
            <Hero/>
            <Venda />
            <DentroNovidades />
            <Footer />
        </AppContainer>
    );
}

export default Home;
