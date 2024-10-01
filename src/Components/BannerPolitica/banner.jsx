import foto from '../../images/termo-bg.svg'

function Container(props) {
    return (  
        <div>
            <div className='divisor-horizontal'></div>
            <div className="w-full p-10" style={{backgroundImage: `url(${foto})`, backgroundSize: 'cover'}}>
                <h1 className='text-5xl text-corTexto-100 font-extrabold'>{props.text}</h1>
            </div>
            <div className='divisor-horizontal'></div>
        </div>
    );
}

export default Container;