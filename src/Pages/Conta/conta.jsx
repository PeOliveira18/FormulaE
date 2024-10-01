import { data } from "autoprefixer";
import { AppContainer } from "../../App";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import foto from '../../images/conta-bg.svg'
import { useNavigate } from "react-router-dom";
function Conta() {
    const navegacao = useNavigate()

    const nome = localStorage.getItem('Nome')
    const sobrenome = localStorage.getItem('Sobrenome')
    const email = localStorage.getItem('Email')
    const dataNascimento = localStorage.getItem('Nascimento')

    const handleLogOut = () => {
        localStorage.clear()
        sessionStorage.clear()
        alert('Log Out concluido com sucesso')
        navegacao('/')
    }

    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <div className="w-auto h-auto flex justify-between px-10 lg:py-10 sm:py-5 py-2 text-center items-center" style={{backgroundImage: `url(${foto}), linear-gradient(90deg, #00005a, #00f 49.48%, #0ff)`, backgroundRepeat:"no-repeat"}}>
                <h1 className="sm:text-[40px] text-lg font-bold text-white">MINHA CONTA</h1>
                <button className="py-2 px-4 bg-[#52528F] rounded-full sm:w-[150px] w-[60px] h-10 text-white" onClick={handleLogOut}>Sair</button>
            </div>
            <div className="flex lg:flex-row flex-col pt-10 pl-7 items-start sm:text-lg text-sm">
                <div className="w-[400px] sm:text-2xl text-sm text-corTexto-500 font-bold">
                    <h1>DETALHES DA CONTA</h1>
                </div>
                <div className="text-corTexto-100 sm:text-base text-sm">
                    <div className="flex sm:flex-row flex-col sm:gap-10 gap-1 pb-5 lg:pt-0 sm:pt-3 pt-3">
                        <p className="font-bold w-[220px]">Nome</p>
                        <p className="font-medium">{nome}</p>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-10 gap-1 pb-5">
                        <p className="font-bold w-[220px]">Sobrenome</p>
                        <p className="font-medium">{sobrenome}</p>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-10 gap-1 pb-5">
                        <p className="font-bold w-[220px]">E-mail</p>
                        <p className="font-medium">{email}</p>
                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-10 gap-1">
                        <p className="font-bold w-[220px]">Data de Nascimento</p>
                        <p className="font-medium">{dataNascimento}</p>
                    </div>
                </div>
            </div>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Conta;