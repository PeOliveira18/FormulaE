function FormNovidades() {
    return (
        <div className="w-full max-w-lg">
            <form className="flex pt-3">
                <input type="email" className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-white rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Endereco de Email" />
                <button className="w-40 rounded bg-black py-1 px-2.5 border border-transparent text-center text-sm text-white hover:bg-[rgba(0,0,0,0.83)] active:bg-[rgba(0,0,0,0.70)] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Inscreva-se</button>
            </form>
        </div>
    );
}

export default FormNovidades;