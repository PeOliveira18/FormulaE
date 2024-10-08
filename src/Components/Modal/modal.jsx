import { XMarkIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Modal({toggleDrawer}) {
    const nomeLogado = localStorage.getItem('Nome')

    return (
        <div className="sidebar fixed top-0 bottom-0 left-0 p-2 max-w-full overflow-y-auto text-center bg-white z-30">
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center justify-between">
                <img src="https://www.fiaformulae.com/resources/v4.22.11/i/elements/formula-e-logo-championship.svg" alt="Logo ABB" className="h-10"/>
                    <XMarkIcon className="cursor-pointer h-6 w-6 text-black" onClick={toggleDrawer}/>
                </div>
                <div className="divisor-horizontal"></div>
            </div>
            <div className="flex gap-4 text-corTexto-200 items-center text-left font-bold">
                {!nomeLogado ? (
                    <>
                        <Link to='/Registro'>
                            <a href="">Registro</a>
                        </Link>
                        <div className="divisor-vertical"></div>
                        <Link to='/Login'>
                            <a href="Registro">Conecte-se</a>
                        </Link>
                    </>
                ):(
                    <Link to='/Conta'>
                        <div className="flex gap-2 items-center cursor-pointer py-3">
                            <UserCircleIcon className="w-5 h-5"/>
                            <p>{nomeLogado}</p>
                        </div>
                    </Link>
                )}
            </div>
            <div className="divisor-horizontal"></div>
            <div className="espaco-menu">
                <Link to='/'>
                    <a href="">Inicio</a>
                </Link>
                <ArrowRightIcon className="tamanhoArrow"/>
            </div>
            <div className="divisor-horizontal"></div>
            <div className="espaco-menu">
                <Link to='/Historia'>
                    <a href="">Historia</a>
                </Link>
                <ArrowRightIcon className="tamanhoArrow"/>
            </div>
            <div className="divisor-horizontal"></div>
            <div className="espaco-menu">
                <Link to ='/ProximasCorridas'>
                    <a href="">Proximas Corridas</a>
                </Link>
                <ArrowRightIcon className="tamanhoArrow"/>
            </div>
            <div className="divisor-horizontal"></div>
            <div className="espaco-menu">
                <Link to='/Pilotos'>
                    <a href="/Pilotos">Pilotos</a>
                </Link>
                <ArrowRightIcon className="tamanhoArrow"/>
            </div>
            <div className="divisor-horizontal"></div>
            <div className="espaco-menu">
                <Link to='/Pistas'>
                    <a href="">Pistas</a>
                </Link>
                <ArrowRightIcon className="tamanhoArrow"/>
            </div>
            <div className="divisor-horizontal"></div>
            <div className="grid drawer1:grid-cols-5 drawer2:grid-cols-4 drawer3:grid-cols-3 grid-cols-2 gap-16 pt-8">
                <a href="https://www.facebook.com/fiaformulae/" target="_blank">
                    <svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                        <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#18ACFE"/>
                        <stop offset="1" stop-color="#0163E0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </a>
                <a href="https://twitter.com/FIAFormulaE" target="_blank">
                    <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" fill="#1DA1F2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/fiaformulae/" target="_blank">
                    <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="20" fill="#C13584"/>
                        <path d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z" fill="white"/>
                        <path d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z" fill="white"/>
                        <path d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.tiktok.com/@fiaformulae?lang=en" target="_blank">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7.50414C18.5333 7.56942 15.52 6.75998 15.2 3H12.4V13.9666C12.4 17.0999 9.93253 18.4412 8.289 17.2507C6.20169 15.7389 7.60003 12.5958 10.2 12.9874V9.6583C8.20003 9.6583 4 10.4416 4 15.3374C4 21.6041 10.8146 21.4083 12.4 20.5824C14.9798 19.2385 15.6 17.7827 15.6 14.5541C15.6 11.6166 15.6 9.85413 15.6 9.0708C16.2667 9.39719 18.08 10.0891 20 10.2458" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
                <a href="https://www.snapchat.com/add/fiaformulae?share_id=cAmIeWSXTMm+WelP5pYhZQ&locale=en_GB&sid=6cbdcffec8674e238638f4c8de0b1c3d" target="_blank">
                    <svg width="40px" height="40px" stroke="#000000" fill="none" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg">
                        <g id="c">
                        <path id="d" class="e" d="m24.0116,42.2697c3.8272-.0024,4.9669-1.6066,7.486-2.7237,2.2497-.9976,5.4694.5087,6.1373-2.1616h0c.0865-1.3801,2.513-1.1579,3.8742-2.0996,1.2418-.8591,1.3659-2.2361.0902-2.778-2.8877-1.2269-5.9232-3.9144-6.6578-6.7964-.4582-1.7978,5.2788-2.3506,4.0841-5.7402-.7049-2.0001-3.2379-1.2958-4.616-.8478.9182-7.1086-2.542-13.3923-10.4098-13.3923s-11.328,6.2837-10.4098,13.3923c-1.378-.448-3.911-1.1523-4.616.8478-1.1947,3.3896,4.5424,3.9424,4.0841,5.7402-.7346,2.882-3.77,5.5695-6.6578,6.7964-1.2757.542-1.1516,1.9189.0902,2.778,1.3612.9417,3.7878.7195,3.8742,2.0996h0c.6679,2.6703,3.8876,1.164,6.1373,2.1616,2.5191,1.1171,3.6588,2.7213,7.486,2.7237.0058,0,.0173,0,.0231,0Z"/>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );

}

export default Modal;
