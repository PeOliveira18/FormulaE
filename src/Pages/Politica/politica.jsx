import { AppContainer } from "../../App";
import Container from "../../Components/BannerPolitica/banner";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import { Link } from "react-router-dom";

function Politica() {
    return (
        <AppContainer>
            <Header />
            <Nav />
            <Container text="Politica de privacidade" />
            <section className="termos-politica">
                <div className="container">
                    <div className="subtitulo">
                        <h2>Politica de privacidade e politica de cookies</h2>
                        <p>Esta política de privacidade descreve os dados pessoais que são coletados ou gerados tratados quando você interage por meio deste. Também explica como seus dados pessoais são usados, compartilhados e protegidos, quais opções você tem em relação aos seus dados pessoais e como você pode nos contatar.</p>
                    </div>
                    <div className="lista">
                        <ul>
                            <a href="#quais"><li>QUAIS Dados Pessoais Coletamos e QUANDO?</li></a>
                            <a href="#protecao"><li>PROTEÇÃO e GERENCIAMENTO de Seus Dados Pessoais</li></a>
                            <a href="#porque"><li>POR QUE e COMO Usamos os Seus Dados Pessoais?</li></a>
                            <a href="#compartilhamento"><li>COMPARTILHAMENTO de Seus Dados Pessoais</li></a>
                            <a href="#cookies"><li>COOKIES e Etiquetas Pixel (Pixel Tags)</li></a>
                            <a href="perguntas"><li>PERGUNTAS e Feedback</li></a>
                        </ul>
                    </div>

                    <div id="quais">
                        <div className="subtitulo">
                            <h2>QUAIS Dados Pessoais Coletamos e QUANDO?</h2>
                        </div>
                        <p>Solicitamos alguns dados pessoais para fornecer-lhe os serviços requeridos. Por exemplo, quando você cria uma conta, entra em contato com nossos serviços, faz doacoes.</p>
                        <p>Esses dados pessoais incluem:</p>
                        <ul>
                            <li>Informacoes de contato, incluindo nome, e-mail e uma senha unica;</li>
                            <li>Informacoes de pagamento, incluindo chaves pix, redirecionamento para contas de banco permitidas pelo site e boletos;</li>
                        </ul>
                    </div>

                    <div id="porque">
                        <div className="subtitulo">
                            <h2>POR QUE e COMO Usamos os Seus Dados Pessoais?</h2>
                        </div>
                        <p>Utilizamos os seus dados pessoais da seguinte forma:</p>
                        <p className="forma">Para Fornecer os Recursos da Plataforma e Serviços que Você Solicita</p>
                        <p>Quando você acessar a nossa Plataforma, usaremos seus dados pessoais para fornecer o serviço solicitado. Por exemplo, se você quiser realizar uma doacao, usaremos seus dados para procedermos com a doacao.</p>
                        <p className="aviso">Para comunicar informacoes no e-mail</p>
                        <p>Quando você consentir, enviaremos novidades e notícias sobre o site e acontecimentos relacionados a ele. Você poderá optar por realizar o cancelamento do recebimento dessas comunicações a qualquer momento após ter dado seu consentimento.</p>
                    </div>

                    <div id="compartilhamento">
                        <div className="subtitulo">
                            <h2>COMPARTILHAMENTO de Seus Dados Pessoais</h2>
                        </div>
                        <p>A plataforma compartilha seus dados pessoais com:</p>
                        <ul>
                            <li>Sao utilizados para as finalidades e nas condicoes citadas acima</li>
                            <li>Terceiros prestadores de servico que realizam o tratamento de dados pessoais, por exemplo, para processar informacoes de pagamentos, distribuir e-mails. Ao utilizar terceiros provedores de serviços, firmamos acordos que exigem que estes implementem medidas técnicas e organizacionais adequadas para proteger seus dados pessoais.</li>
                        </ul>
                    </div>

                    <div id="cookies">
                        <div className="subtitulo">
                            <h2>COOKIES e Etiquetas Pixel (Pixel Tags)</h2>
                        </div>
                        <p>Coletamos informações de seu navegador, que podem incluir dados pessoais, quando você usa a nossa Plataforma. Utilizamos uma variedade de métodos, como cookies e etiquetas pixel para coletar essas informações, que podem incluir seu (i) endereço IP; (ii) identificador único de cookie, informações de cookie e informações sobre se o seu dispositivo possui software para acessar determinados recursos; (iii) identificador único de dispositivo e tipo de dispositivo; (iv) domínio, tipo de navegador e idioma, (v) sistema operacional e configurações do sistema; (vi) país e fuso horário; (vii) sites visitados anteriormente; (viii) informações sobre sua interação com nossos sites, tais como comportamento de cliques, compras e preferências indicadas; (ix) horários de acesso e URLs de referência.</p>
                        <p>Utilizamos cookies e etiquetas pixel para monitorar o uso da Plataforma por nossos clientes. Isso nos permite fornecer serviços aos nossos clientes e melhorar e personalizar sua experiência online.  </p>
                    </div>

                    <div id="perguntas">
                        <div className="subtitulo">
                            <h2>PERGUNTAS e Feedback</h2>
                        </div>
                        <p>Queremos receber perguntas, comentários e preocupações sobre nossa Política e práticas de privacidade. Se você deseja fornecer um feedback ou se tem perguntas ou preocupações, ou deseja exercer seus direitos relacionados aos seus dados pessoais, entre em contato, por meio do <a href="../../../index.html#email-contato" className="link">email localizado no final da pagina principal</a></p>
                    </div>

                    <div className="voltar">
                        <Link to='/'>
                            <a href="">Voltar para pagina principal</a>
                        </Link>
                    </div>
                </div>
            </section>
        </AppContainer>
    );
}

export default Politica;