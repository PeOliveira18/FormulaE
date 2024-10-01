import foto from '../../images/registro-bg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Registro() {
    const navegacao = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const nome = event.target.nome.value
        const sobrenome = event.target.sobrenome.value
        const dataNascimento = event.target.date.value
        const senha = event.target.senha.value

        Axios.post("http://localhost:5174/register",{
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            nascimento: dataNascimento,
            senha : senha
        }).then((response) =>{
            console.log(response)
        })

        localStorage.setItem('Email',email)
        localStorage.setItem('Nome',nome)
        localStorage.setItem('Sobrenome',sobrenome)
        localStorage.setItem('Nascimento',dataNascimento)
        localStorage.setItem('Senha',senha)
        
        alert('Registro realizado com sucesso')  
        navegacao('/')
        event.target.reset()
    }

    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            <div className="w-full h-full hidden lg:block">
                <img src={foto} alt="Imagem de fundo" className="w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Seja bem vindo</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="input-cadastro" required placeholder='Insira de endereco de Email'/>
                    </div>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="nome" className="block text-gray-600">Nome</label>
                        <input type="text" id="nome" name="nome" className="input-cadastro" required placeholder='Insira seu nome'/>
                    </div>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="sobre" className="block text-gray-600">Sobrenome</label>
                        <input type="text" id="sobrenome" name="sobrenome" className="input-cadastro" required placeholder='Insira seu sobrenome'/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="mb-3 block text-gray-600">Data de nascimento</label>
                        <input type="date" name="date" id="date" className="input-cadastro" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-800">Senha</label>
                        <input type="password" id="senha" name="senha" className="input-cadastro" required placeholder='Insira sua senha'/>
                    </div>
                    <div className="flex items-center mt-8 mb-4">
                        <input id="termos" name="termos" type="checkbox" className="h-4 w-4 shrink-0 rounded cursor-pointer" required/>
                        <label htmlFor="termos" className="text-gray-500 font-bold ml-3 block text-sm">
                            Eu aceito os <a href="#" className="text-corTexto-200 font-semibold hover:underline ml-1">Termos e Condicoes</a>
                        </label>
                    </div>
                    <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Registrar</button>
                </form>
                <div className="mt-6 text-green-500 text-center">
                    <a href="#" className="hover:underline">Ja tem uma conta?</a>
                </div>
            </div>
        </div>
    );
}

export default Registro;