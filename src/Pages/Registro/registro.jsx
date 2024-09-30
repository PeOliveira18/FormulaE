import foto from '../../images/registro-bg.jpg'

function Registro() {
    return (
        <div class="bg-sky-100 flex justify-center items-center h-screen">
            <div class="w-[950px] h-full hidden lg:block">
                <img src={foto} alt="Imagem de fundo" className="w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Seja bem vindo</h1>
                <form action="#" method="POST">
                    <div class="mb-4 bg-sky-100">
                        <label for="username" class="block text-gray-600">Email</label>
                        <input type="email" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div class="mb-4 bg-sky-100">
                        <label for="username" class="block text-gray-600">Nome de usuario</label>
                        <input type="email" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div class="mb-4">
                        <label for="date" class="mb-3 block text-gray-600">Data de nascimento</label>
                        <input type="date" name="date" id="date" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    
                    

                    <div class="mb-4">
                        <label for="password" class="block text-gray-800">Senha</label>
                        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div class="flex items-center mt-8 mb-4">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
                        <label for="remember-me" class="text-gray-500 font-bold ml-3 block text-sm">
                            I accept the <a href="javascript:void(0);" className="text-corTexto-200 font-semibold hover:underline ml-1">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="submit" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div class="mt-6 text-green-500 text-center">
                    <a href="#" class="hover:underline">Ja tem uma conta?</a>
                </div>
            </div>
        </div>
    );
}

export default Registro;