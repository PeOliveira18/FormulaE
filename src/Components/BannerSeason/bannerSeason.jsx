import foto from '../../images/mapa.webp'


function BannerSeason() {
    return ( 
        <div className="bg-cover bg-[#7F7FAC] max-w-full flex justify-between md:flex-row flex-col md:items-center items-start p-10 text-white" style={{backgroundImage: `url(${foto})`}}>
                <div className="relative z-10 max-w-[590px]">
                    <h1 className="font-bold md:text-5xl sm:text-[28px] text-2xl">TEMPORADA 11</h1>
                    <p className="md:text-base text-sm">O calendario 2024/2025 esta aqui! Veja as datas das proximas corridas</p>                    
                </div>
                <div className="">
                    <button className="btn-efeito bg-[#52528F] text-white">Descubra mais</button>
                </div>  
            </div>
    )
    ;
}

export default BannerSeason;