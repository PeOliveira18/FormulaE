import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/16/solid";
import { infoLinhaTempo } from "./infoDescricao";
import foto1 from '../../images/imagem1-timeline.webp';
import foto2 from '../../images/imagem2-timeline.webp';
import foto3 from '../../images/imagem3-timeline.webp';
import foto4 from '../../images/imagem4-timeline.webp';
import foto5 from '../../images/imagem5-timeline.webp';
import foto6 from '../../images/imagem6-timeline.webp';
import { useEffect } from "react";

function LinhaTempo() {
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [id, setId] = useState(0)

    const toggleEvento = (evento) => {
        setEventoSelecionado(eventoSelecionado === evento ? null : evento);
    };

    const imagensCarrosel = [foto1, foto2, foto3, foto4, foto5, foto6]

    const carrosel = () => {
            setId((prev) => (prev + 1) % imagensCarrosel.length)
    }

    useEffect(() => {
        const intervalo = setInterval(carrosel, 4000)
        return () => clearInterval(intervalo)
    },[id])

    return (
        <div className="flex lg:flex-row flex-col justify-between h-screen overflow-auto px-4 md: lg:gap-28 gap-24 bg-corTexto-100">
            <div className="flex flex-col">
                {infoLinhaTempo.map((props) => (
                    <div className="alinha-items flex items-start mb-4">
                        <div className="font-bold text-2xl text-white mb-1">{props.titulo}</div>
                        <div className="linha-tempo">
                            <time className="texto-tempo">{props.ano}</time>
                            <div className="text-xl font-light text-white flex gap-2">
                                {props.subtitulo}
                                {eventoSelecionado === props.id ? (
                                    <MinusCircleIcon className="drawer1:w-4 w-6 cursor-pointer" onClick={() => toggleEvento(props.id)} />
                                ) : (
                                    <PlusCircleIcon className="drawer1:w-4 w-6 cursor-pointer" onClick={() => toggleEvento(props.id)} />
                                )}
                            </div>
                        </div>
                        {eventoSelecionado === props.id && (
                            <div className="text-slate-500">{props.descricao}</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="m-auto w-full lg:w-1/2">
                <img src={imagensCarrosel[id]} alt="Imagem descritiva" className="object-cover w-[800px] h-auto" />
            </div>
        </div>
    );
}

export default LinhaTempo;
