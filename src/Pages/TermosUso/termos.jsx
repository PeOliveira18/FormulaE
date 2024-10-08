import { AppContainer } from "../../App";
import Container from "../../Components/BannerPolitica/banner";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import { Link } from "react-router-dom";


function Termos() {
    return (
        <AppContainer>
            <Header />
            <Nav />
            <Container text="TERMOS E CONDICOES" />
            <section class="termos-politica">
                <div class="container">
                    <div class="subtitulo">
                        <h2>Termos de uso para a plataforma</h2>
                    </div>
                    <p class="aviso">LEIA ESTES TERMOS DE SERVIÇO ("TERMOS") CUIDADOSAMENTE ANTES DE USAR A PLATAFORMA. SEU ACESSO E USO REPRESENTAM SUA ACEITAÇÃO TOTAL E INCONDICIONAL DOS TERMOS DE USO.</p>
                    <p>Seja bem-vindo! Você esta lendo estes Termos de Uso da plataforma.</p>
                    <p class="contrato">Estes Termos criam um contrato juridicamente vinculativo entre Você ("Você") e e Nos da Plataforma, pessoa jurídica constituída sob as leis da República Federativa do Brasil, localizada em São Paulo/ Rua Nelson Tartuce 405 - Parque das Paineiras - SP em relação ao seu uso do Site.</p>

                    <div class="subtitulo">
                        <h3>1. REGRAS BASICAS</h3>
                    </div>
                    <p><b>Elegibilidade</b>. O uso do Site ou APP destina-se apenas ao acesso e utilização por pessoas físicas</p>
                    <p><b>Regras para Cadastro.</b> Quando Você cadastra uma conta de membro no Site, as seguintes regras se aplicam:</p>
                    <ul>
                        <li><b>Seja verdadeiro:</b> Forneça informações de registro precisas e atuais.</li>
                        <li><b>Uso pessoal:</b> Mantenha seu cadastro pessoal. Nao cadastre mias de uma conta e nao cadastre no nome de outra pessoa.</li>
                        <li><b>Mantenha sua seguraca:</b> Mantenha seu nome de usuario, senha seguras fortes e seguras, nao permita que mais ninguem use sua conta</li>
                    </ul>
                    <div class="subtitulo">
                        <h3>2. PROPRIEDADE DO CONTEUDO</h3>
                    </div>
                    <p>Todo o conteudo do site é de propriedado NOSSA, e é protegido por direitos autorais.</p>
                    <div class="subtitulo">
                        <h3>3. Reclamacoes</h3>
                    </div>
                    <p>Qualquer reclamacao devera ser feita pelo <a href="../../../index.html#email-contato" class="link">e-mail de contato localizado no final da pagina principal.</a></p>
                    <div class="voltar">
                        <Link to='/'>
                            <a href="../../../index.html#voltar">Voltar para pagina principal</a>
                        </Link>
                    </div>
                </div>
            </section>
        </AppContainer>
    );
}

export default Termos;