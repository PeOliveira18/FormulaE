import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import LinhaTempo from "../../Components/LinhaTempo/linha";
import Nav from "../../Components/Nav/nav";

function Historia() {
    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="divisor-horizontal"></div>
            <div className="m-auto text-center text-corTexto-100 text-5xl font-bold p-10">
                <h1>Voce conhece a hisotria da Formula E?</h1>
            </div>
            <LinhaTempo/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Historia;