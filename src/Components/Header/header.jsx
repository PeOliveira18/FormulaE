function Header() {
    return (  
        <>
            <header className="hidden md:flex justify-between h-14 items-center pl-12">
                <div className="text-corTexto-100 flex items-center gap-5 font-bold">
                    <a href="">O que e a formula E?</a>
                    <div className="divisor-vertical"></div>
                </div>
                <div className="text-corTexto-200 flex gap-6 items-center pr-5 font-bold">
                    <p>Registro</p>
                    <div className="divisor-vertical"></div>
                    <p>Conecte-se</p>
                    <div className="divisor-vertical"></div>
                    <a href=""><img src="https://www.fiaformulae.com/resources/v4.22.11/i/elements/fia-logo.svg" alt="Logo FIA" /></a>
                </div>
            </header>
            <div className="divisor-horizontal"></div>
        </>
    );
}

export default Header;