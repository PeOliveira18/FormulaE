import { MapPinIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

function Footer() {
    return (
        <footer className="w-screen">
            <div className="grid grid-cols-3 gap-10 pl-10 mt-10">
                <div>
                    <h1 className="text-3xl mb-3">Conteudo</h1>
                    <div className="flex flex-col gap-6 pl-4 mt-6">
                        <a href="">Politica de privacidade</a>
                        <a href="">Politica de retorno</a>
                        <a href="">Termos de Servico</a>
                        <a href="">Contatos</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl mb-3">Entre em contato</h1>
                    <div className="flex items-start justify-start gap-2 px-2 mt-6">
                        <MapPinIcon className="text-red-600 w-4 h-[22px]"/>
                        <div className="flex flex-col items-start">
                            <p>xxxxxxxxxxx, 123</p>
                            <p>Sao Paulo, SP</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-2 pl-2 mt-12">
                        <PhoneIcon className="text-red-600 w-4 h-[22px]"/>
                        <p>11 5005-5005</p>
                    </div>
                    <div className="flex items-start justify-start gap-2 pl-2 mt-5">
                        <EnvelopeIcon className="text-red-600 w-4 h-[22px]"/>
                        <p>suporte@gmail.com</p>
                    </div>
                </div>
                <div className="max-w-[330px] flex flex-col justify-end">
                    <hr class="my-6 border-gray-200 dark:border-gray-700"/>
                    <span class="text-sm text-gray-500 dark:text-gray-400">© 2024 <a href="" class="hover:underline">Tech Mahindra</a>. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

