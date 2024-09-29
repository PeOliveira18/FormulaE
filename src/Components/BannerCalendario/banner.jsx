import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="flex justify-center">
            <div className="relative flex items-end">
                <picture className="">
                    <source
                        srcSet="https://resources.formula-e.pulselive.com/photo-resources/2024/08/19/3c58fde8-1a60-4dfd-af78-c63dbbdfa2b9/FE_SEASON-11-WEB-BANNER-1-.png?width=822&amp;height=1080"
                        media="(max-width: 100%)"/>
                    <img width="1865" height="700" src="https://resources.formula-e.pulselive.com/photo-resources/2024/08/19/3c58fde8-1a60-4dfd-af78-c63dbbdfa2b9/FE_SEASON-11-WEB-BANNER-1-.png?width=1580&amp;height=1000" alt="FE_SEASON 11 WEB BANNER (1)" className="h-[700px]"/>
                    <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000 svg" viewBox="110 0 1440 320">
                        <defs>
                            <linearGradient id="gradient-fill" x1="0" x2="1" y1="0" y2="0" className='md:flex hidden'>
                                <stop offset="30%" stopColor="#000C78" stopOpacity="1" />
                                <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#gradient-fill)" d="M0,64L40,85.3C80,107,160,149,240,160C320,171,400,149,480,144C560,139,640,149,720,170.7C800,192,880,224,960,213.3C1040,203,1120,149,1200,128C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"/>
                    </svg>
                </picture>
                <div className="absolute bottom-0 left-0 md:max-w-[790px] max-w-[600px] p-5 md:p-10 text-white font-bold z-10">
                    <h1 className="md:text-4xl text-xl md:leading-normal leading-tight">
                        CALENDÁRIO DA TEMPORADA 11: CORRIDAS DA FORMULA E EM 2024/2025
                    </h1>
                    <p className="md:text-lg text-base mt-3">
                        Agenda da Formula E para 2024/2025
                    </p>
                    <Link to= '/ProximasCorridas'><button className="btn-efeito mt-5 md:mt-8">Descubra mais</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;
