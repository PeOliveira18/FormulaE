import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import CardCorridas from "./cardCorridas";

function Corridas() {
    return ( 
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="flex justify-between px-10 mt-8">
                <div className="text-corTexto-400 text-[40px] font-bold">
                    <h1>CALENDARIO DE PROVA 2024/25</h1>
                </div>
                <div>
                    <button className="btn-efeito bg-corTexto-100 text-white w-52 p-3">Sincronize o calendario</button>
                </div>
            </div>
            <CardCorridas/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer> 
        
    );
}

export default Corridas;