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
import { useEffect } from "react";
import { Carousel } from "nuka-carousel";


function Pistas() {

    const pistas = [pista1, pista1, pista3, pista4, pista5]
    const [id, setId] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setId((prev) => (prev +1) %pistas.length)
        },3000)
        return () => clearInterval(interval)
    }, [pistas.lenght])

    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <div className="flex justify-center mt-3">Circuito de Berlin - Alemanha</div>
            <div className="flex mt-8 transition-transform duration 0.5s ease-in-out translate-x-0" id="carrosel">
                <img src={pistas[id]} alt="" className="w-[500px] m-auto"/>
            </div>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Pistas;