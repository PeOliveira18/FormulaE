function FormNovidades() {

    const notificacoes  = (event) => {
        event.preventDefault()
        let email = event.target.email.value
        alert(`Voce recebera novidades no email: ${email}` )
        event.target.reset()
    }
    
    return (
        <div className="w-full max-w-lg">
            <form className="flex pt-3" onSubmit={notificacoes}>
                <input type="email" id = "email" className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-white rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow invalid:focus:border-2 invalid:focus:border-red-400" placeholder="Endereco de Email" />
                <button className="w-40 rounded bg-black py-1 px-2.5 border border-transparent text-center text-sm text-white hover:bg-[rgba(0,0,0,0.83)] active:bg-[rgba(0,0,0,0.70)] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Inscreva-se</button>
            </form>
        </div>
    );
}

export default FormNovidades;