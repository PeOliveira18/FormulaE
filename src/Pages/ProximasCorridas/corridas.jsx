import { AppContainer } from "../../App";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import foto from '../../images/mapa.webp'
import CardCorridas from "./cardCorridas";

function Corridas() {
    return ( 
        <AppContainer>
            <Header/>
            <Nav/>
            <div className="bg-cover bg-[#7F7FAC] max-w-full flex justify-between items-center p-10 text-white" style={{backgroundImage: `url(${foto})`}}>
                <div className="relative z-10">
                    <h1 className="font-bold text-5xl">TEMPORADA 11</h1>
                    <p className="text-base">O calendario 2024/2025 esta aqui! Veja as datas das proximas corridas</p>                    
                </div>
                <div className="btn-efeito bg-[#52528F] text-white">
                    <button>Descubra mais</button>
                </div>
            </div>
            <div className="flex justify-between px-10 mt-8">
                <div className="text-corTexto-400 text-[40px] font-bold">
                    <h1>CALENDARIO DE PROVA 2024/25</h1>
                </div>
                <div>
                    <button className="btn-efeito bg-corTexto-100 text-white w-52 p-3">Sincronize o calendario</button>
                </div>
            </div>
            <CardCorridas/>
        </AppContainer> 
        
    );
}

export default Corridas;