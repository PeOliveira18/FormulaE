import banner from '../../images/banner-season.webp'

function Banner() {
    return (  
        <section className='max-w-screen flex justify-center'>
            <div className='flex items-end'>
                <img src={banner} alt="" className='md:max-h-[1000px] max-h-[820px] md:w[1300px]'/>
                <div className='absolute justify-start text-white font-bold max-w-[790px] p-10'>
                    <h1 className='text-4xl'>CALENDARIO DA TEMPORADA 11: CORRIDAS DA FORMULA E EM 2024/2025</h1>
                    <p className='text-lg mt-3'>Agenda da Formula E para 2024/2025</p>
                    <button className="btn-efeito">Descubra mais</button>
                </div>
            </div>
            
        </section>
        
    );
}

export default Banner;