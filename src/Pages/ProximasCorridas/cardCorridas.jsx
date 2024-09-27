import foto1 from '../../images/imgCorrida1.webp'
import brasil from '../../images/brasil.svg'
import { infoCorridas } from './infoCorridas';

function CardCorridas() {
    return (  
        <div className='grid grid-cols-4 mt-5'>
            {
                infoCorridas.map(props => (

                        <div className='flex justify-between max-w-[370px] p-5 ml-5 border-8 hover:border-fundo-200 hover:duration-500 hover:rounded-none border-white rounded-2xl cursor-pointer'>
                            <div className='flex flex-col'>
                                <div className='bg-fundo-200 max-w-[63px] p-3 mb-[33px] text-center'>
                                    <p className='text-corTexto-500 font-bold text-2xl'>{props.dia}</p>
                                    <p className='text-base text-corTexto-200'>{props.mes}</p>
                                </div>
                                <img src={props.bandeira} alt="Bandeira" className='w-[46px] h-[30px]'/>
                                <p className='text-corTexto-500 font-bold'>{props.cidade}</p>
                                <div className="border w-36 bg-gradient-to-r from-degrade-azulEscuro to-degrade-azulClaro h-[3px]"></div>
                                <p className='text-corTexto-500 font-bold'>{props.round}</p>
                            </div>
                            <div>
                                <img src={props.logo} alt="Card" className='w-[89px] h-[223px]'/>
                            </div>
                        </div>
                )) 
            }
            <div className='divisor-vertical'></div>
        </div>
    );
}

export default CardCorridas;