import Banner from "../BannerCalendario/banner";
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <>
            <div className="bg-white sm:h-36 h-48 flex sm:justify-between flex-col sm:flex-row sm:items-center sm:p-10 p-4 sm:gap-8 gap-3">
                <div className="text-corTexto-100 flex flex-col gap-2">
                    <h1 className="font-bold md:text-5xl text-[24px]">Season 11</h1>
                    <p className="md:text-base text-sm">Comecacando 7 de Dezembro de 2024. Veja o calendario para 2024/2025</p>
                </div>
                <div>
                    <Link to= '/Season11'>
                        <button className="bg-corTexto-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-36">Veja mais</button>
                    </Link>
                </div>
            </div>
            <Banner/>
        </>
    );
}

export default Hero;