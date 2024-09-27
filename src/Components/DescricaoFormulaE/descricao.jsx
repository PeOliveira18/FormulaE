import video from '../../videos/VideoFormulaE.mp4'

import { dadosDescricao } from "./dadosDescricao";

function DescricaoFormulaE() {
    return (  
        <>
        <div className="p-10 text-5xl text-corTexto-100">
            <h1 className="font-bold">Formula E races are a high-speed game of chess with...</h1>
            <div className="flex justify-around">
                {
                    dadosDescricao.map(props => (
                        <div className="p-6 max-w-[475px]">
                            <img src={props.foto} className="w-[425px] h-[190px] rounded-md"></img>
                            <h1 className="text-xl font-bold">{props.titulo}</h1>
                            <p className="text-base">{props.descricao}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <video className="w-full h-auto max-w-full" autoPlay controls muted>
                <source src={video} type="video/mp4"/>
        </video>
        </>
    );
}

export default DescricaoFormulaE;