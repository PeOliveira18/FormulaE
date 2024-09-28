import BtnMenu from "../BotaoMenu/btnMenu";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <header className="flex justify-between md:p-5 md:max-h-20 md:pl-12 pl-5 md:items-center font-bold text-lg">
                <div className="flex md:flex h-14 md:h-10 md:p-0 items-center md:gap-0 gap-5">
                    <BtnMenu/>
                    <button className="h-14 border md:hidden"></button> 
                    <Link to= '/home'><img src="https://www.fiaformulae.com/resources/v4.22.11/i/elements/formula-e-logo-championship.svg" alt="Logo ABB" className="h-10"/></Link>
                </div>
                <div className="flex gap-5 font-bold text-corTexto-100">
                    <Link to='/'><a href="" className="desaparece">
                        Inicio</a>
                    </Link>
                    <a href="" className="desaparece">Novidades</a>
                    <Link to='/ProximasCorridas'>
                        <a href="" className="desaparece">Proximas corridas</a>
                    </Link>
                    <Link to='/Pilotos'><a href="" className="desaparece">Pilotos</a></Link>
                    <a href="" className="desaparece">Pistas</a>
                </div>
            </header>
        </>
    );
}

export default Nav;