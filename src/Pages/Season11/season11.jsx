import { AppContainer } from "../../App";
import Nav from "../../Components/Nav/nav";
import Header from "../../Components/Header/header";
import styled from "styled-components";
import foto from '../../images/fotoSeason.webp'
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import video from '../../videos/VideoCalendario.mp4'
import { Link } from "react-router-dom";

const Gradient = styled.div`
    background-image: url(https://www.fiaformulae.com/resources/v4.22.11/i/elements/bg-article-theme-default.svg), linear-gradient(90deg, #00005a, #00f 49.48%, #0ff);
    background-size: 100%;
    height: 650px;
    width: 125px;
    @media (max-width: 1024px) {
        width: 100%;
        height: 300px;
    }
`


function Season11() {
    return (
        <AppContainer>
            <Header/>
            <Nav/>
            <div className="divisor-horizontal"></div>
            <div className="mt-5 flex flex-col lg:flex-row">
                <Gradient/>
                <div className="flex flex-col text-left">
                    <div className="lg:pl-36 pl-4 text-corTexto-100 font-bold flex flex-col gap-3">
                        <h1 className="text-[40px] lg:text-[40px] leading-9">Fórmula E anuncia o calendário da 11ª temporada com o regresso de Miami e duas corridas no Mónaco</h1>
                        <span className="flex items-center text-sm lg:text-base">Noticias
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="2" fill="#000000" /></svg>  11 JUN 2024  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="2" fill="#000000" />
                            </svg>  3 MINUTOS
                        </span>
                        <p className="text-black font-light lg:w-[660px] w-full">A Fórmula E anunciou hoje o seu calendário provisório para a 11ª temporada do ABB FIA Formula E World Championship, com o maior número de corridas e locais definidos para uma temporada, após a validação do Conselho Mundial de Desportos Motorizados da FIA.</p>
                    </div>
                    <div className="flex relative w-auto mt-5 lg:-ml-24 -ml-32">
                        <img src={foto} alt="Carros na pista" className="h-[600px] lg:h-[800px] w-full object-cover"/>
                    </div>
                    <div className="max-w-[1200px] flex relative flex-col text-left mt-10 gap-4 text-lg  lg:pl-24 pl-4 pr-24">
                        <p>A Fórmula E vai completar uma temporada de 17 corridas pela primeira vez na sua história, abrangendo 11 locais emblemáticos, continuando a ser pioneira nas corridas totalmente eléctricas. Novos locais de corrida em Miami e Diriyah; uma rodada dupla de corridas separadas no Mónaco - a primeira para o Principado em qualquer campeonato de automobilismo; uma rodada dupla de corridas em Tóquio; e o retorno de Jacarta complementam a lista de outros locais da cidade.</p>
                        <p>A campanha da época 11 terá início em São Paulo, a 7 de dezembro de 2024, após os testes de pré-época realizados de 4 a 7 de novembro de 2024 em Valência. Será a primeira vez que o novo carro de corrida GEN3 Evo será testado em público, com uma capacidade de 0-60 mph em apenas 1,82 segundos - 36% mais rápido do que o atual GEN3.</p>
                        <Link to='/ProximasCorridas'>
                            <a href="" className="text-[#0000FF] underline">CALENDÁRIO: Todos os locais de corrida definidos para a 11ª temporada</a>
                        </Link>
                        <p>Um novo local na Arábia Saudita acolherá a primeira corrida dupla da época, a 14 e 15 de fevereiro de 2025, enquanto a série regressa a Miami pela primeira vez desde a 1ª época, num local totalmente novo, a 12 de abril de 2025. O local do Homestead-Miami Speedway baseia-se na sua herança e no seu sucesso ao acolher emocionantes corridas da NASCAR e da IndyCar durante décadas.</p>
                        <p>Pela primeira vez na história do Principado, o Mónaco acolherá corridas de automóveis separadas e consecutivas no Circuito de Mónaco, dada a natureza competitiva e cheia de ação das corridas de Fórmula E.</p>
                        <p>Na sequência do E-Prix de Tóquio inaugural de enorme sucesso, em que as vias públicas da cidade mais populosa do mundo foram encerradas para um evento automóvel pela primeira vez, terá lugar uma dupla série de corridas a 17 e 18 de maio de 2025.</p>
                        <p>Jacarta também retorna ao calendário após um hiato de um ano, enquanto uma final dupla no ExCeL London completa o maior calendário de corridas da Fórmula E até hoje.</p>
                        <p>Um local foi incluído como TBC enquanto decorrem as discussões finais com um novo local, antes do anúncio do calendário confirmado, previsto para o outono, após a reunião do Conselho Mundial do Desporto Automóvel da FIA.</p>
                        <video className="w-full h-auto max-w-full" controls muted>
                            <source src={video} type="video/mp4"/>
                        </video>
                        <p>Jeff Dodds, Diretor Executivo da Fórmula E, afirmou: “Para a 11ª temporada, estamos a levar as corridas eléctricas para o próximo nível e a fazer coisas que nunca foram feitas antes no desporto automóvel. Nosso líder mundial GEN3 EVO vai estrear na frente de centenas de milhões de fãs em todo o mundo, ao mesmo tempo em que adiciona dois novos locais e combinações de duplas para expandir ainda mais nosso esporte.</p>
                        <blockquote>O novo e melhorado calendário oferece uma mistura perfeita de circuitos para os pilotos levarem os seus carros melhorados ao limite, mantendo-se fiel ao nosso ADN de corridas de rua e à ação em pista que produz.</blockquote>
                        <p>Alberto Longo, cofundador e diretor de campeonatos da Fórmula E, disse: “Estamos entusiasmados em oferecer um calendário com alguns novos destaques, ao mesmo tempo em que construímos nossos locais de legado. Retornar a Miami nos dá uma casa em uma das cidades mais icônicas e loucas por esportes dos Estados Unidos, enquanto garantir uma rodada dupla em Mônaco é um sonho tornado realidade.</p>
                        <blockquote>Estamos ansiosos por aproveitar o sucesso de Tóquio e realizar uma dupla jornada, ao mesmo tempo que regressamos a Jacarta e entretemos também a nossa enorme base de fãs indonésios. Com 17 corridas ao longo da temporada e o nosso carro de corrida mais avançado a estrear em pista, estamos a oferecer aos nossos fãs um desporto de ponta que só podíamos esperar quando fundámos o campeonato há pouco mais de 10 anos.</blockquote>
                        <p>Marek Nawarecki, Diretor do Departamento de Desporto de Circuitos da FIA, afirmou: “O calendário do Campeonato Mundial de Fórmula E da ABB FIA 2024/25 apresenta uma série de circuitos que realmente mostrarão as qualidades do novo carro GEN3 EVO, que será apresentado na próxima temporada.</p>
                        <blockquote>Estou contente por a Fórmula E capitalizar o sucesso das corridas de Tóquio e Xangai, ao mesmo tempo que regressa a alguns dos seus locais emblemáticos e mantém uma boa quantidade de circuitos de rua, o que faz parte do seu ADN principal. Também espero que esta nova temporada seja novamente palco de uma ação fascinante em pista.</blockquote>
                    </div>
                </div>
            </div>
                <DentroNovidades/>
                <Footer/>
        </AppContainer>
    );
}

export default Season11;