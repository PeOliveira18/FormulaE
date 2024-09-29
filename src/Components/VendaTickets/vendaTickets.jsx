import bannerTickets from '../../images/banner-tickets.webp'

function Venda() {
    return (  
        <div className="bg-corTexto-100 flex lg:justify-between lg:flex-row flex-col items-center gap-10 px-14 py-10 text-white font-bold lg:h-[550px] h-[800px]">
            <div className=' pr-12'>
                <div className='lg:hidden flex relative'>
                    <img src={bannerTickets} alt="" />
                </div>
                <p className='text-corTexto-300 text-xl'>TICKETS EM VENDA</p>
                <h1 className='text-5xl mb-5'>TEMPORADA 11 LONDON E-PRIX</h1>
                <p>Following the exhilarating, sold-out season finale this weekend in London, we're thrilled to announce that tickets for the Season 11 Finale on 26th & 27th July 2025 are now available to purchase! This is your chance to secure the best seats in the house!</p>
                <button className="btn-efeito"><a href="https://www.eventim.co.uk/artist/formula-e/?affiliate=XFE" target='_blank'>Compre tickets</a></button>
            </div>
            <div className='lg:flex hidden relative'>
                <img src={bannerTickets} alt="Banner Tickets" />
            </div>
        </div>
    );
}

export default Venda;