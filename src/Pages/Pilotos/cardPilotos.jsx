import { infoPilotos } from "./infoPilotos";

function CardPilotos() {
    return (  
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {
                infoPilotos.map(props => (
                    <div className="shadow-md p-5 mx-7 rounded-lg">
                        <div className="flex justify-between ">
                            <div className="flex flex-col justify-between">
                                <div className="text-corTexto-100">
                                    <p className="text-xs font-semibold">{props.nome}</p>
                                    <h1 className="text-2xl font-bold">{props.sobrenome}</h1>
                                </div>
                                <img src={props.time} alt={props.time} className="max-w-[100px] mt-4" />
                            </div>
                            <div className="relative flex-shrink-0 flex">
                                <div className={`absolute top-0 left-0 h-full w-full ${props.bgColor} z-0`} 
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                                </div>
                                <img src={props.corredor} alt={props.nome} className="w-[178px] h-[210px] z-10 relative"/>
                                <p className="absolute top-1 right-2 text-3xl font-bold text-white">{props.numero}</p>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-gray-200 mt-5"></div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardPilotos;
