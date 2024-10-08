import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import SectionTecnologia from "../../Components/SectionTecnologia/sectionTecnologia";

function Vision() {
    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <SectionTecnologia/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Vision;