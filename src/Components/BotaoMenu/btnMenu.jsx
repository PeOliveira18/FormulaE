import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";


function BtnMenu() {
    const [abreDrawer, setAbreDrwaer] = useState('')

    return (  
            <div className="md:hidden ">
                <Bars3Icon className="h-5 w-5 text-corTexto-300 cursor-pointer"/>   
            </div>
    );
}

export default BtnMenu;