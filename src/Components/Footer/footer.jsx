import { MapPinIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full max-h-[228px] mb-8">
            <div className="grid grid-cols-3 gap-10 pl-10 mt-10">
                <div>
                    <h1 className="md:text-3xl text-xl mb-3">Conteudo</h1>
                    <div className="flex flex-col gap-6 pl-4 mt-6">
                        <Link to='/Politica'>
                            <a href="#">Politica de privacidade</a>
                        </Link>
                        <Link to='/Termos'>
                            <a href="#">Termos de uso</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="md:text-3xl text-xl mb-3">Entre em contato</h1>
                    <div className="flex items-start justify-start gap-2 px-2 mt-6">
                        <MapPinIcon className="text-red-600 w-4 h-[22px]"/>
                        <div className="flex flex-col items-start">
                            <p>xxxxxxxxxxx, 123</p>
                            <p>Sao Paulo, SP</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-2 pl-2 md:mt-12 mt-4">
                        <PhoneIcon className="text-red-600 w-4 h-[22px]"/>
                        <p>11 5005-5005</p>
                    </div>
                    <div className="flex items-start justify-start gap-2 pl-2 md:mt-5">
                        <EnvelopeIcon className="text-red-600 w-4 h-[22px]"/>
                        <p>suporte@gmail.com</p>
                    </div>
                </div>
                <div className="xl:max-w-[330px] max-w-[280px] flex flex-col sm:justify-end justify-start">
                    <hr class=" sm:block hidden my-6 border-gray-400"/>
                    <span class="text-sm text-gray-500 dark:text-gray-400 sm:max-w-[330px] max-w-[50px]">© 2024 <a href="" class="hover:underline">Tech Mahindra</a>. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

