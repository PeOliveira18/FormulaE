import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import { AppContainer } from "../../App";
import DescricaoFormulaE from "../../Components/DescricaoFormulaE/descricao";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";


function FormulaE() {
    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <div className="bg-corTexto-100 max-w-full text-white p-10">
                <h1 className="text-5xl font-bold">O que é a Formula E?</h1>
                <p className="text-base mt-5">An intro to all things Formula E. Strap in, you're about to discover the future of motorsport</p>
            </div>
            <DescricaoFormulaE/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default FormulaE;