import { AppContainer } from "../../App";
import BannerSeason from "../../Components/BannerSeason/bannerSeason";
import DentroNovidades from "../../Components/DentroNovidades/dentroNovidades";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import Nav from "../../Components/Nav/nav";
import foto from '../../images/post.webp'
import story from "../../images/InstagramPost.jpg"

function Post() {
    return (
        <AppContainer>
            <Header />
            <Nav />
            <BannerSeason />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around mt-5 w-full h-auto">
                <img
                    src={foto}
                    alt="Descrição Post"
                    className="h-auto w-full max-w-md lg:h-[700px] lg:w-auto object-contain"
                />
                <img
                    src={story}
                    alt="Story Instagram"
                    className="h-auto w-full max-w-md lg:w-auto object-contain mt-5 lg:mt-0"
                />
            </div>

            <DentroNovidades />
            <Footer />
        </AppContainer>
    );
}

export default Post;