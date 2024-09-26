import banner from '../../images/banner-season.webp'

function Banner() {
    return (  
        <section className='max-w-screen'>
            <div>
                <img src={banner} alt=""/>
            </div>
        </section>
    );
}

export default Banner;