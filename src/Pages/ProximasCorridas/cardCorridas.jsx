import foto1 from '../../images/imgCorrida1.webp'
import brasil from '../../images/brasil.svg'
import { infoCorridas } from './infoCorridas';

function CardCorridas() {
    return (  
        <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-5'>
            {
                infoCorridas.map(props => (
                    <>
                        <div className='flex justify-between sm:max-w-[370px] max-w-[570px] p-5 ml-5 border-8 hover:border-fundo-200 hover:duration-500 hover:rounded-none border-white rounded-2xl cursor-pointer'>
                            <div className='flex flex-col'>
                                <div className='bg-fundo-200 max-w-[63px] p-3 mb-[33px] text-center'>
                                    <p className='text-corTexto-500 font-bold text-2xl'>{props.dia}</p>
                                    <p className='text-base text-corTexto-200'>{props.mes}</p>
                                </div>
                                <img src={props.bandeira} alt="Bandeira" className='w-[46px] h-[30px]'/>
                                <p className='text-corTexto-500 font-bold sm:text-base text-lg sm:mt-0 mt-3'>{props.cidade}</p>
                                <div className="border sm:w-36 w-80 bg-gradient-to-r from-degrade-azulEscuro to-degrade-azulClaro h-[3px] sm:mt-0 mt-3"></div>
                                <p className='text-corTexto-500 font-bold sm:text-base text-lg sm:mt-0 mt-3'>{props.round}</p>
                            </div>
                            <div>
                                <img src={props.logo} alt="Card" className='w-[89px] h-[223px]'/>
                            </div>
                            <div className='divisor-vertical h-[285px] sm:flex hidden'></div>
                        </div>
                        </>
                )) 
            }
            
        </div>
    );
}

export default CardCorridas;