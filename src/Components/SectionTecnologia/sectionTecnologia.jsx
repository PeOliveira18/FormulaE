import foto from '../../images/foto-tecnologia.jpg';

function SectionTecnologia() {
    return (  
        <div className="relative bg-cover flex justify-center items-center h-full mt-5">
            <img src={foto} alt="Imagem a tecnologia" className='h-full w-full object-cover' />
            <div className='absolute'>
                <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-corTexto-200 font-extrabold border h-auto bg-fundo-100 py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 '>
                    TECNOLOGIA A SER IMPLEMENTADA
                </h1>
            </div>
        </div>
    );
}

export default SectionTecnologia;
