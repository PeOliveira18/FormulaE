import { useNavigate } from 'react-router-dom';
import foto from '../../images/login-bg.webp'


function Login() {

    const navegacao = useNavigate()
    const handleLogin = (event) => {
        const email = event.target.email.value;
        const senha = event.target.senha.value;

        const emailRegistrado = localStorage.getItem('Email')
        const senhaRegistrada = localStorage.getItem('Senha')

        if(email === emailRegistrado && senha === senhaRegistrada){
            alert('Login sucedido')
            navegacao('/')

        }else{
            alert('Email ou senha incorretos. Tente novamente')
        }
    }

    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            <div className="max-w-[770px] h-full hidden lg:block">
                <img src={foto} alt="Imagem de fundo" className="w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-800">Senha</label>
                        <input type="password" id="senha" name="senha" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
                    </div>
                    <button type="submit" onSubmit={handleLogin} className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div className="mt-6 text-green-500 text-center">
                    <a href="#" className="hover:underline">Registre aqui</a>
                </div>
            </div>
        </div>
    );
}

export default Login;