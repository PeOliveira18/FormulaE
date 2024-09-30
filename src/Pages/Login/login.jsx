import foto from '../../images/login-bg.webp'


function Login() {
    return (
        <div class="bg-sky-100 flex justify-center items-center h-screen">
            <div class="max-w-[770px] h-full hidden lg:block">
                <img src={foto} alt="Imagem de fundo" className="w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Login</h1>
                <form action="#" method="POST">
                    <div class="mb-4 bg-sky-100">
                        <label for="username" class="block text-gray-600">Email</label>
                        <input type="email" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-800">Senha</label>
                        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    <button type="submit" class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div class="mt-6 text-green-500 text-center">
                    <a href="#" class="hover:underline">Sign up Here</a>
                </div>
            </div>
        </div>
    );
}

export default Login;