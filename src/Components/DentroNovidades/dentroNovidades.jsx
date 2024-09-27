import Download from "../Download/download";
import FormNovidades from "../FormNovidades/formNovidades";

function DentroNovidades() {
    return (  
            <section className="bg-corTexto-100 lg:h-[400px] sm:h-[480px] max-h-[600px] mt-10 flex flex-col text-center items-center text-white font-bold">
                <div className="max-w-[505px] mt-8 flex flex-col gap-3">
                    <h1 className="sm:text-[32px] text-2xl">Fique por dentro das novidades</h1>
                    <p className="text-sm">Se inscreva em nosso newsletter para ficar sempre por dentro das novidades e saiba das promocoes antecipadamente</p>
                </div>
                <FormNovidades/>
                <Download/>
            </section>
    );
}

export default DentroNovidades;