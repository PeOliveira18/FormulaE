import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import pista1 from '../../images/berlin.webp'
import pista2 from '../../images/portland.webp'
import pista3 from '../../images/shangai.webp'
import pista4 from '../../images/monaco.png'
import pista5 from '../../images/missano.webp'
import { useState } from "react";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon} from "@heroicons/react/16/solid";



function Pistas() {

    const pistas = [pista1, pista2, pista3, pista4, pista5]
    const [id, setId] = useState(0)

    const proximaPista = () => {
        setId((prev) => (prev + 1) % pistas.length)
    }

    const pistaAnterior = () => {
        setId((prevId) => (prevId - 1 + pistas.length) % pistas.length);
    };

    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="p-10 text-5xl text-corTexto-100 font-bold m-auto text-center">Circuito de Berlin - Alemanha</div>
            <div className="flex mt-8 transition-transform duration 0.5s ease-in-out translate-x-0" id="carrosel">
                <ArrowLeftCircleIcon className="w-14 cursor-pointer" onClick={pistaAnterior}/>
                <img src={pistas[id]} alt="" className="w-[500px] m-auto"/>
                <ArrowRightCircleIcon className="w-14 cursor-pointer" onClick={proximaPista}/>
            </div>
            
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Pistas;