import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/16/solid";

function Header() {
    const nomeLogado = localStorage.getItem('Nome')

    return (
        <>
            <header className="hidden md:flex justify-between h-14 items-center pl-12">
                <div className="text-corTexto-100 hover:text-corTexto-200 flex items-center gap-5 font-bold">
                    <Link to='/OQueFormulaE'>
                        <a href="">O que e a formula E?</a>
                    </Link>
                    <div className="divisor-vertical"></div>
                </div>
                <div className="text-corTexto-200 flex gap-6 items-center pr-5 font-bold">
                    {!nomeLogado ? (
                        <>
                            <Link to='/Registro'>
                                <p className="cursor-pointer hover:text-corTexto-100">Registro</p>
                            </Link>
                            <div className="divisor-vertical"></div>
                            <Link to='/Login'>
                                <p className="cursor-pointer hover:text-corTexto-100">Conecte-se</p>
                            </Link>
                        </>
                    ) : (
                        <Link to='/Conta'>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <UserCircleIcon className="w-5 h-5" />
                                <p>{nomeLogado}</p>
                            </div>
                        </Link>
                    )}
                    <div className="divisor-vertical"></div>
                    <a href=""><img src="https://www.fiaformulae.com/resources/v4.22.11/i/elements/fia-logo.svg" alt="Logo FIA" /></a>
                </div>
            </header>
            <div className="divisor-horizontal"></div>
        </>
    );
}

export default Header;