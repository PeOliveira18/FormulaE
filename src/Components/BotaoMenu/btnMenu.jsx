import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "../Modal/modal";


function BtnMenu({openDrawer}) {
    const [abreDrawer, setAbreDrwaer] = useState(false)

    const toggleDrawer = () => {
        setAbreDrwaer(!abreDrawer)
    }

    return (  
        <>
            <div className="md:hidden ">
                <Bars3Icon className="h-5 w-5 text-corTexto-300 cursor-pointer" onClick={toggleDrawer}/>   
            </div>
            {abreDrawer && <Modal toggleDrawer={toggleDrawer}/>}
        </>
    );
}

export default BtnMenu;