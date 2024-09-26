function Header() {
    return (
        <header className="flex justify-between p-5 pl-12 items-center">
            <div className="font-bold text-2xl">
                <h1>Tech Mahindra</h1>
            </div>
            <div className="flex gap-5">
                <a href="">Inicio</a>
                <a href="">Novidades</a>
                <a href="">Quem somos</a>
                <a href="">Conta</a>
            </div>
        </header>
    );
}

export default Header;