import Banner from "../BannerCalendario/banner";

function Hero() {
    return ( 
        <>
            <div className="bg-white h-36 flex justify-between items-center p-10 gap-8">
                <div className="max-w-[520px] text-corTexto-100 flex flex-col gap-2">
                    <h1 className="font-bold md:text-5xl text-[28px]">Season 11</h1>
                    <p className="md:text-base text-sm">Comecacando 7 de Dezembro de 2024. Veja o calendario para 2024/2025</p>
                </div>
                <div>
                <button className="bg-corTexto-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-36">Veja mais</button>
                </div>
            </div>
            <Banner/>
        </>
    );
}

export default Hero;