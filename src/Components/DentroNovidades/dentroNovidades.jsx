import FormNovidades from "../FormNovidades/formNovidades";

function DentroNovidades() {
    return (  
        <section className="bg-fundo-100 h-72 mt-10 flex flex-col text-center items-center">
            <div className="max-w-[505px] mt-8 flex flex-col gap-3">
                <h1 className="text-2xl">Fique por dentro das novidades</h1>
                <p>Se inscreva em nosso newsletter para ficar sempre por dentro das novidades e saiba das promocoes antecipadamente</p>
            </div>
            <FormNovidades/>
        </section>
    );
}

export default DentroNovidades;