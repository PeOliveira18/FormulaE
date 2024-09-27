import BtnMenu from "../BotaoMenu/btnMenu";
import Modal from "../Modal/modal";

function Ancoragem() {
    return (
        <>
            <header className="flex justify-between md:p-5 md:max-h-20 md:pl-12 pl-5 md:items-center font-bold text-lg">
                <div className="flex md:flex h-14 md:h-10 md:p-0 items-center md:gap-0 gap-5">
                    <BtnMenu/>
                    <button className="h-14 border md:hidden"></button> 
                    
                    <img src="https://www.fiaformulae.com/resources/v4.22.11/i/elements/formula-e-logo-championship.svg" alt="Logo ABB" className="h-10"/>
                </div>
                <div className="flex gap-5 font-bold text-corTexto-100">
                    <a href="" className="desaparece">Inicio</a>
                    <a href="" className="desaparece">Novidades</a>
                    <a href="" className="desaparece">Proximas corridas</a>
                    <a href="" className="desaparece">Pilotos</a>
                    <a href="" className="desaparece">Pistas</a>
                </div>
            </header>
            <div className="divisor-horizontal"></div>
        </>
    );
}

export default Ancoragem;