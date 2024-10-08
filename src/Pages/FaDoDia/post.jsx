import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import foto from '../../images/post.webp'

function Post() {
    return (  
        <AppContainer>
            <Header/>
            <Nav/>
            <BannerSeason/>
            <img src={foto} alt="Descricao Post" className="h-[700px] w-auto mt-5 m-auto"/>
            <DentroNovidades/>
            <Footer/>
        </AppContainer>
    );
}

export default Post;