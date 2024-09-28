import { AppContainer } from "../../App";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import CardPilotos from "./cardPilotos";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";


function Pilotos() {
    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="p-10 text-corTexto-100 font-bold text-5xl max-w-[600px]">
                <h1>Motoristas de 2023-2024</h1>
            </div>
            <div className="divisor-horizontal"></div>
            <CardPilotos/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Pilotos;