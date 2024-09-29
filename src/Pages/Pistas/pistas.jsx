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
import foto from '../../images/bg-pistas.webp'



function Pistas() {

    const pistas = [pista1, pista2, pista3, pista4, pista5]
    const cidadesPistas = ['Circuito de Berlin - Alemanha', 'Circuito de Portland - Estados Unidos','Circuito de Shangai - China', 'Circuito de Monaco - Franca', 'Circuito de Missano - Italia']

    const [id, setId] = useState(0)

    const proximaPista = () => {
        setId((prev) => (prev + 1) % pistas.length)
    }

    const pistaAnterior = () => {
        setId((prevId) => (prevId - 1 + pistas.length) % pistas.length);
    }

    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="bg-cover bg-center max-w-auto xl:h-[1100px] lg:h-[800px] max-h-full" style={{backgroundImage: `url(${foto})`}}>
                <div className="p-10 text-5xl text-corTexto-100 font-extrabold m-auto text-center w-auto">
                    <h1 className="text-5xl">{cidadesPistas[id]}</h1>
                </div>
                <div className="m-auto mt-8 relative 2xl:w-[1500px] 2xl:h-[800px] w-auto h-auto flex items-center">
                    <div className="relative w-[50%] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%] m-auto">
                        <img src={pistas[id]} alt={cidadesPistas[id]} className="object-cover w-full h-full"/>
                        <div className="flex justify-between absolute items-center px-4 inset-0 text-white">
                            <ArrowLeftCircleIcon className="drawer1:w-8 drawer2:w-5 w-4 cursor-pointer" onClick={pistaAnterior}/>
                            <ArrowRightCircleIcon className="drawer1:w-8 drawer2:w-5 w-4 cursor-pointer " onClick={proximaPista}/>
                        </div>
                    </div>
                </div>
            </div>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Pistas;